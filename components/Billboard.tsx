import useBillboard from "../hooks/useBillboard"

const Billboard = () => {
  const { data } = useBillboard()
  console.log(data)
  //const movie = data[0]

  return (
    <div className='relative h-[56.25vw]'>
      <video 
        poster={data[0]?.thumbnailUrl} 
        src={data[0]?.videoUrl}
        autoPlay
        muted
        loop
        className='
          w-full
          h-[56.25vw]
          object-cover
          brightness-[60%]
          transition
        '
      >
        
      </video>
    </div>
  )
}

export default Billboard