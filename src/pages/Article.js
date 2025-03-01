import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content';
import Articles from '../components/Articles';

function Article() {

    const { name } = useParams();
    const article = articleContent.find((article) =>article.name === name);

    if(!article){
        return <h1 className='sm:text-4xl text-2xl  my-6 text-center text-gray-900 font-semibold font-serif'>Article does not exists</h1>

        
    }
    const otherArticles = articleContent.filter(article => article.name != name)


  return (
    <>
       <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-600 text-center font-mono'>
        {article.title}
       </h1>
       {article.content.map((paragraph, index)=>(
        <p className='mx-auto leading-relaxed text-base mb-4 font-serif text-gray-950' key={index}>{paragraph}</p>
        
       ))}
       <h1 className='sm:text-2xl text-xl font-bold my-4 font-serif  text-gray-600 '>Other Articles</h1>
       <div className='flex flex-wrap -m-4'>
          <Articles articles={otherArticles}/>
       </div>
    </>
    
  )
}

export default Article