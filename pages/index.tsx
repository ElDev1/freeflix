import type { NextPage, NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import Billboard from '../components/Billboard'
import MovieList from '../components/MovieList'

import Navbar from '../components/Navbar'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const Home: NextPage = () => {

  return (
    <>
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList />
      </div>
    </>
  )
}

export default Home
