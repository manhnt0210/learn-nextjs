import { Box, Stack, Typography } from '@mui/material';

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
