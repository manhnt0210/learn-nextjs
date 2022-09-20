import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import { Box, Divider } from '@mui/material';
import { Container } from '@mui/system';
import { Seo } from '@/components/common';

export interface BlogDetailPageProps {
  post: Post
}

export default function BlogDetailPage ({ post }: BlogDetailPageProps) {
  if (!post) return null
  console.log({post})
  return (
    <Box>
      <Seo data={{
        title: `${post.title} | ManhNT Blog`,
        description: post.description,
        url: 'https://www.facebook.com/',
        thumbnailUrl: post.thumbnailUrl || '',
        }}/>

      <Container>
        <h1>Post Detail Page</h1>
        <p>{post.title}</p>
        <p>{post.author?.name}</p>
        <p>{post.description}</p>

        <Divider />

        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>
    </Box>
    
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

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, {title: 'Blog Detail page'})
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '')

    post.htmlContent = file.toString()

  return {
    props: {
      post: post
    }
  }
}
