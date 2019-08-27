import React, { Component } from 'react'

export class Tyler extends Component {
  render() {
    return (
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tyler%2C_The_Creator_%288048745695%29_%28cropped%29.jpg/440px-Tyler%2C_The_Creator_%288048745695%29_%28cropped%29.jpg" />
        <article className="desc-tyler">
          <h2>Tyler the Creator</h2>
          <h3 className="tyler-album">Latest Album: IGOR</h3>
          <p>
            Tyler Gregory Okonma (born March 6, 1991), known professionally as
            Tyler, the Creator, is an American rapper, singer, songwriter,
            record producer, music video director, fashion designer and graphic
            designer.
          </p>
        </article>
      </div>
    )
  }
}

export default Tyler
