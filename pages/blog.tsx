import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import * as React from 'react';

export interface BlogPageProps {
}

export function BlogPage (props: BlogPageProps) {
  return (
    <Box>
      Blog Page
    </Box>
  );
}

BlogPage.Layout = MainLayout

export default BlogPage
