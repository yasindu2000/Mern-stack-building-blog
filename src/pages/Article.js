import React from 'react'
import { useParams } from 'react-router-dom'

function Article() {

    const { name } = useParams();


  return (
    <div className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        This is the { name } Articles
    </div>
  )
}

export default Article