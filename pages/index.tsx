import { MainLayout } from '@/components/layout'
import { Box } from '@mui/system'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '../models'
import {FeaturedWork, HeroSection, RecentPosts} from '@/components/home'
import { WorkList } from '@/components/work'

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const handleGoToDetailPage = () => {
    router.push('/posts/1')
  }

  return (
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeaturedWork />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
