import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import * as React from 'react';

export interface WorksPageProps {
}

export function WorksPage (props: WorksPageProps) {
  return (
    <Box>
      Works Page
    </Box>
  );
}

WorksPage.Layout = MainLayout

export default WorksPage
