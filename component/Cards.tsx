import React from 'react'
import Card from './Card'


interface Props {
    size:string | string[]
}

const Cards = ({size}:Props) => {
  return (
    <div>
      <Card />
    </div>
  )
}

export default Cards
