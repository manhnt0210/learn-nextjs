import * as React from 'react';
import { Stack, Box, Typography, Chip } from '@mui/material'; 

export function Footer() {
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack>
        
      </Stack>
      <Typography>
        Copyright {new Date().getFullYear()} All rights revserved.
      </Typography>
    </Box>
  );
}
