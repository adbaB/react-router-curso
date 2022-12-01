import React from 'react'
import { useParams } from 'react-router-dom'
import { blogData } from "../../Data/data";
export const Post = () => {

    const {id} = useParams()

    const PostData = blogData.find((post) => post.url === id)
    console.log(blogData,PostData,id)
  return (
    <div>
        <h1>{PostData.title}</h1>
    </div>
  )
}
 