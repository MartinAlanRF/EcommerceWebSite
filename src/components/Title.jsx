import React from 'react'

const Title = ({titulo}) => {
  return (
    <header className='row col mt-3'>
        <h2 className='text-center'>{titulo}</h2>
    </header>
  )
}

export default Title