import React from "react";

function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}){
    
    console.log(title,date,preview,minutes)
    return (
    <article>
    <h3>
        {title}
    </h3>
    <small>
        {date}
    </small>
    <p>
        {preview}
    </p>
    <p>
        {minutes} minute read

    </p>
    </article>
    )
}

export default Article;