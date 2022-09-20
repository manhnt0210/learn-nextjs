import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export interface BlogDetailPageProps {
  post: Post
}

export default function BlogDetailPage ({ post }: BlogDetailPageProps) {
  if (!post) return null
  console.log({post})
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.title}</p>
      <p>{post.author?.name}</p>
      <p>{post.description}</p>
      <p>{post.mdContent}</p>
    </div>
  );
}

BlogDetailPage.Layout = MainLayout

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList()

  return {
    paths: postList.map((post: Post) => ({params: {slug: post.slug}})),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList()
  const slug = context.params?.slug
  if (!slug) return { notFound: true }

  const post = postList.find(x => x.slug == slug)
  if (!post) return { notFound: true }

  return {
    props: {
      post: post
    }
  }
}
