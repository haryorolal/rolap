import React from 'react'
import './Blog.css'
import { Article } from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './importBlog';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          Alot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imageUrl={blog01} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imageUrl={blog02} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is"/>
          <Article imageUrl={blog03} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is"/>
          <Article imageUrl={blog04} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is"/>
          <Article imageUrl={blog05} date="Sep 26, 2024" title="GPT-3 and Open AI is the future. Let us explore how it is"/>
        </div>
      </div>
    </div>
  )
}

export default Blog