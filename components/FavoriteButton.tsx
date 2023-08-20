import axios from 'axios'
import React, { useCallback, useMemo } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import useCurrentUser from '../hooks/useCurrentUser'
import useFavorites from '../hooks/useFavorites'

interface FavoriteButtonProps {
  movieId: string
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites()
  const { data: currentUser, mutate } = useCurrentUser()
  
  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(movieId)
  }, [currentUser, movieId])

  const toogleFavorites = useCallback(async () => {
    let response
    
    if(isFavorite) {
      response = await axios.delete('/api/favorite', { data: { movieId }})
    } else {
      response = await axios.post('/api/favorite', { movieId })
    }

    const updatedFavoriteIds = response?.data?.favoritesIds

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds
    })

    mutateFavorites()
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites])

  return (
    <div className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center transition hover:border-netural-300'>
      <AiOutlinePlus className='text-white' size={25} />
    </div>
  )
}

export default FavoriteButton