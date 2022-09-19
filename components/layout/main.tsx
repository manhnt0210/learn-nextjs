import * as React from 'react';
import Link from 'next/link';
import { LayoutProps } from '@/models';
import { Stack } from '@mui/system';
import { Footer, Header } from '../common';
import { Box, Container } from '@mui/material';

export function MainLayout ({children}: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow="1">
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}

