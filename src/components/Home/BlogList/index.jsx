import React from 'react'
import Blog from '../../../pages/Blog'

export const BlogList = ({blogs}) => (
    <div className='bloglist-wrap'>

        {blogs.map(blog=>
        <BlogItem blog={blog} key={blog.id}/>
        )}
    </div>

)
    
    