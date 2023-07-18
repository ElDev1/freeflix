import type { NextPage, NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'
import useCurrentUser from '../hooks/useCurrentUser'

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
  const { data: user } = useCurrentUser()

  return (
    <div>
      <h1 className='text-xl text-green-500'>Freeflix</h1>
      <p className='text-white'>Logged in as: {user?.email}</p>
      <button className='h-10 px-2 bg-white' onClick={() => signOut()}>logout</button>
    </div>
  )
}

export default Home
