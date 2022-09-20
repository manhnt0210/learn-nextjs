import { Post } from '@/models';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { format } from 'date-fns';

export interface PostCardProps {
  post: Post
}

export function PostCard ({ post }: PostCardProps) {
  if (!post) return null
  format
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">{post.title}</Typography>

        <Stack direction="row" my={2}>
          <Typography variant="body1">
            {format(Number(post.publishedDate), 'dd MMM yyyy')}
          </Typography>

          <Divider orientation="vertical" flexItem sx={{ mx: 2}}/>

          <Typography>
            {post.tagList.join(', ')}
          </Typography>
        </Stack>
        <Typography variant="body2">{post.title}</Typography>
      </CardContent>
    </Card>
  );
}

