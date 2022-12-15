import React from 'react'
import { useEffect } from 'react';


const Music = ({title,description,background}) => {


  useEffect(()=>{


  },[]) 

  return (
    <div className='music'>
      <img src={background} className='music__image'/>
      <h3 className='music__title'>{title}</h3>
      <h4 className='music__description'>{description}</h4>
      <div className='music__play'><svg height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className='music__play__icon' ><path fill='current
      Color' d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></div>
    </div>
  )
}

export default Music