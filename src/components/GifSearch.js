import React from 'react'

const GifSearch = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <h6>Enter a Search Term</h6>
      <input type="text" value={props.search} onInput={props.onInput} />
      <input type="submit" value="Find Gifs" />
    </form>

  )
}

export default GifSearch


// The <GifSearch /> component will render a form that receives the user input for the giphy search.
// The text input should be a controlled component that stores the value of the input in
// it's component state and renders the DOM accordingly. The React component is always in charge of
// what the DOM looks like.
//
// <GifSearch /> should receive a callback prop from it's parent. On a submit event, it should
// invoke that callback prop with the value of the text input. It is this callback function,
// defined in <GifListContainer />, that will actually query the api with the text the user has entered.
