import React from "react"
import { connect } from "frontity"
import post from "./post"


const Page = ({state}) =>{
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const author = state.source.author[post.author]


    return(
    <div>
        <h2>{post.title.rendered}</h2>
        <p>
            <strong>Posted: </strong>
            {post.date}
        </p>
        <p>
            <strong>Author: </strong>
            {author.name}
        </p>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </div>  
    )
}
export default connect(Page)