import { Card, CardContent } from '@mui/material';
import * as React from 'react';

export interface IPostCardProps {
}

export function PostCard (props: IPostCardProps) {
  return (
    <Card>
      <CardContent>Post title</CardContent>
    </Card>
  );
}

