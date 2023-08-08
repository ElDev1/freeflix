import { NextApiRequest, NextApiResponse } from 'next'

import prismaDb from '../../lib/prismadb'
import serverAuth from '../../lib/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    await serverAuth(req)

    const movieCount = await prismaDb.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)

    const ramdonMovies = await prismaDb.movie.findMany({
      take: 1,
      skip: randomIndex
    })

    return res.status(200).json(ramdonMovies)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}