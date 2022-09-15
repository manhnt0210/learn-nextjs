// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

// type Data = {
//   data: any[],
//   pagination: any
// } | {name: string}

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    req.headers.cookie = ''

    proxy.once('proxyRes', ()=> {
      resolve(true)
    })

    proxy.web(req, res, {
      target: 'https://js-post-api.herokuapp.com',
      changeOrigin: true,
      selfHandleResponse: false
    })

  })
}


  // const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10')
  // const responseJSON = await response.json()

  // res.status(200).json(responseJSON)
