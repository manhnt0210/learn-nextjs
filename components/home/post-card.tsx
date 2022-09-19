import { Post } from '@/models/index';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { format } from 'date-fns';
import * as React from 'react';

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

        <Typography variant="body1" my={2} sx={{ display: 'flex'}}>
          {format(Number(post.publishedDate), 'dd MMM yyyy')}

          <Divider orientation="vertical" flexItem sx={{ mx: 2}}/>

          {post.tagList.join(', ')}
        </Typography>

        <Typography variant="body2">{post.title}</Typography>
      </CardContent>
    </Card>
  );
}

