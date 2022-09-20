import { Work } from '@/models';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { WorkList } from '../work';



export function FeaturedWork () {
  const workList: Work[] = [
    {
      id: 1,
      title: 'Designing Dashboards',
      createdAt: '1663558819597',
      updatedAt: '1663558819597',
      tagList: ['Design', 'Pattern'],
      shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl: 'https://images.unsplash.com/photo-1628813640706-ca88bcdfb228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      createdAt: '1663558819597',
      updatedAt: '1663558819597',
      tagList: ['Figma', 'Icon Design'],
      shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl: 'https://images.unsplash.com/photo-1442181530688-d812138618b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id: 3,
      title: '36 Days of Malayalam type',
      createdAt: '1663558819597',
      updatedAt: '1663558819597',
      tagList: ['Figma', 'IT'],
      shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl: 'https://images.unsplash.com/photo-1442181530688-d812138618b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
  ]

  return ( 
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography>Featured works</Typography>
        
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}

