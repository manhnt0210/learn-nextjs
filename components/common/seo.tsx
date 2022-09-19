import Head from 'next/head';
import * as React from 'react';

export interface SeoData {
  title: string
  description: string
  url: string
  thumbnailUrl: string
}

export interface SeoProps {
  data: SeoData
}

export function Seo ({ data }: SeoProps) {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>NextJS Tutorial | Manhnt0210</title>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.url} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.thumbnailUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={data.url} />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content={data.thumbnailUrl}></meta>
    </Head>
  );
}

