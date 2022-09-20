import { Post } from '@/models';
import { Divider, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { format } from 'date-fns';

export interface PostItemProps {
  post: Post
}

export function PostItem ({ post }: PostItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">{post.title}</Typography>

      <Stack direction="row" my={2}>
        <Typography variant="body1">
          {format(new Date(post.publishedDate), 'dd MMM yyyy')}
        </Typography>

        <Divider orientation="vertical" flexItem sx={{ mx: 2}}/>

        <Typography>
          {post.tagList.join(', ')}
        </Typography>
      </Stack>
      <Typography variant="body2">{post.title}</Typography>
    </Box>
  );
}

