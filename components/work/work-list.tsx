import * as React from 'react';
import { Work } from '@/models';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';
import { Fragment } from 'react';

export interface WorkListProps {
  workList: Work[]
}

export function WorkList ({ workList }: WorkListProps) {
  if (workList.length == 0) return null

  return (
    <Box>
      {workList.map(work => (
        <Fragment key={work.id}>
          <Box>
            {work.title}
            <Divider sx={{ mt: 2, mb: 4 }} />
          </Box>
        </Fragment>
      ))}
    </Box>
  );
}

