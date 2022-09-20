import { Post } from '@/models';
import { Box, Link as MuiLink, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Link from 'next/link';
import { PostCard } from './post-card';



export function RecentPosts () {
  const postList: Post[] = [
    {
      id: 1,
      slug: '',
      title: 'Making a design system',
      publishedDate: '1663558819597',
      tagList: ['Design', 'Pattern'],
      description: '',
    },
    {
      id: 2,
      slug: '',
      title: 'Creating pixel perfect',
      publishedDate: '1663558819597',
      tagList: ['Figma', 'Icon Design'],
      description: '',
    },
  ]

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack direction="row" mb={2} justifyContent={{xs: 'center', md: 'space-between'}} alignItems="center">
          <Typography>Recent Posts</Typography>
          <Link passHref href="/blog">
            <MuiLink sx={{display: {xs: 'none', md: 'inline'}}}>View all</MuiLink>
          </Link>
        </Stack>

        <Stack direction={{
          xs: 'column',
          md: 'row',
        }} sx={{'& > div': {width: {xs: '100%', md: '50%'}}}} spacing={3}>
          {postList.map(post => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

