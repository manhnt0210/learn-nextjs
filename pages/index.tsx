import { MainLayout } from '@/components/layout'
import { Box } from '@mui/system'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '../models'
import {FeaturedWork, HeroSection, RecentPosts} from '@/components/home'
import { WorkList } from '@/components/work'
import { Seo } from '@/components/common'

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const handleGoToDetailPage = () => {
    router.push('/posts/1')
  }

  return (
    <Box>
      <Seo data={{
        title: 'NextJS By Manhnt',
        description: 'NextJS By Manhnt description',
        url: 'https://www.facebook.com/',
        thumbnailUrl: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/305310344_1861309797373022_3138126043626647210_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FJI620MGKlkAX90yyRB&_nc_ht=scontent.fsgn2-8.fna&oh=00_AT9W5ut6HhbkX1BgzUbp4mO52H50llf0E1c05gz8UkUEWw&oe=632DC3DC'
      }}/>

      <HeroSection />
      <RecentPosts />
      <FeaturedWork />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
