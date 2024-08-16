import React from "react";

const Page = (props) => {
  const handleClick = (event) => {
    // Prevents the browser from following the link.
    event.preventDefault()

    // Updates the currentPage state (in App) with null.
    props.navigate(null)
  }

  return (
    <main>
      <a href="/" onClick={handleClick}>Home</a>
      <h1>{props.title}</h1>
      <p><b>Author:</b> {props.author.name}</p>
      <p><b>Published:</b> {new Date(props.createdAt).toLocaleDateString()}</p>
      <p>{props.content}</p>
      <p><b>Tags</b></p>
      <ul>
        {props.tags.map(tag => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default Page