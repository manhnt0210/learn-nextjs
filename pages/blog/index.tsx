import { PostItem } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils';
import { Divider } from '@mui/material';
import { Box, Container } from '@mui/system';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface BlogListPageProps {
  posts: Post[]
}

export default function BlogListPage ({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>

        <Box component="ul" sx={{ listStyleType: 'none'}}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <PostItem post={post} />
                </a>
              </Link>

              <Divider sx={{ my: 3 }}/>
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  const postList = await getPostList()

  return {
    props: {
      posts: postList
    }
  }
}
