import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const FRONTURL = 'http://api.giphy.com/v1/gifs/search?q='
const BACKURL = '&api_key=dc6zaTOxFJmzC'


class GifListContainer extends React.Component {
  state = {
    search: '',
    image_urls: []
  };

  onInput = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const firstThreeImages = []
    this.fetchData(this.state.search)
    .then(gifObj => {
      for (let i = 0; i < 3; i++) {
        firstThreeImages.push(gifObj.data[i])
        this.setState({
          search: '',
          image_urls: [...firstThreeImages]
        })
      }
    })
  }

  fetchData(event) {
    return fetch(`${FRONTURL}${event}${BACKURL}`)
    .then(res => res.json())
  }

  render() {
    const images = this.state.image_urls
    return (
      <div>
        <h1>Here is the GifListContainer</h1>
        <GifSearch data={this.state.search} onInput={this.onInput} onSubmit={this.onSubmit}/>
        {images.map(image => {
          return <GifList imageData={image} key={image.id} />
         })}
      </div>
    )
  }

}

export default GifListContainer
