import React from 'react'
import { Link } from 'react-router-dom';



function Articles({articles}) {
  return (
    <>
        {articles.map((article, index)=>(

<div key={index} className='p-4 md:w-1/2'>
   <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md'>
      <Link to={`/article/${article.name}`}>
         <img className='lg:h-48 md:h-36 w-full object-cover object-center' src={article.thumbnail} alt='blog'></img>
      </Link>
      <div className='p-6'>
         <Link  key={index} to={`/article/${article.name}`}>
            <h3 className='text-lg font-bold font-mono text-gray-900 mb-3  hover:text-gray-500'>
               {article.title}

            </h3>
         
         
         </Link>
         <p className='leading-relaxed mb-4 font-serif text-gray-700'>
           {article.content[0].substring(0, 110)}...

         </p>
         <div className='flex items-center flex-wrap'>
           <Link className='text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 font-semibold  hover:text-blue-400'
           
           to={`/article/${article.name}`}>Learn more..
           
           
           </Link>

         </div>
          
      </div>
   </div>

</div>


))}
    </>
  )
}

export default Articles