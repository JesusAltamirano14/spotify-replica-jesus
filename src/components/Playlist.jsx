import React from 'react'
import { data } from '../data';
import Music from './Music';

const Playlist = ({title,firstNumber,lastNumber}) => {

  const array = data.slice(firstNumber,lastNumber);



  return (
    <div className='playlist'>
      <h1 className='playlist__up'>
        <div className='playlist__up__left'>
          {title}
        </div>
        <div className='playlist__up__right'>
          VER TODO
        </div>
      </h1>
      <div className='playlist__down'>
      {array?.map(data=>(<Music key={crypto.randomUUID()} title={data.title} background={data.background} description={data.description} />))}
      </div>
    </div>
  )
}

export default Playlist