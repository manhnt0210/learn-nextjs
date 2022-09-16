import * as React from 'react';
import Link from 'next/link';
import { LayoutProps } from '@/models/index';
import { Stack } from '@mui/system';
import { Footer, Header } from '../common';
import { Box, Container } from '@mui/material';

export function MainLayout ({children}: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/works">
        <a>Works</a>
      </Link>
      <Box component="main" flexGrow="1">
        <Container maxWidth="sm" sx={{bgcolor: 'primary.main'}}>SM CONTAINER</Container>
        <Container sx={{bgcolor: 'primary.main'}}>MD CONTAINER</Container>

        {children}
      </Box>
      <Footer />
    </Stack>
  );
}

