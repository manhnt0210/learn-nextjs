import { Box, Link as MuiLink } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import clsx from 'clsx'
import {ROUTE_LIST} from './routes'

export interface HeaderDesktopProps {
}

export default function HeaderDesktop (props: HeaderDesktopProps) {
  const router = useRouter()

  return (
    <Box display={{xs: 'none', lg: 'block'}} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route : any) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink sx={{ml: 2, fontWeight: 'medium'}} className={clsx({active: router.pathname === route.path})}>{route.label}</MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
