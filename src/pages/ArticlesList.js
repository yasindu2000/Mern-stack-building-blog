import React from 'react'
import articleContent from './article-content';



import Articles from '../components/Articles';

function ArticlesList() {
  return (
    <div >
        <h1 className='sm:text-4xl text-2xl  my-6 text-gray-900 text-center font-semibold font-serif '>
            Articles
        </h1>
        <div className='container py-4 mx-auto'>
            <div className='flex flex-wrap m-4'>
               <Articles articles={articleContent}/>
            </div>

        </div>

    </div>
  )
}

export default ArticlesList