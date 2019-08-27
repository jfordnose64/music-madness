import React, { Component } from 'react'

export class Frank extends Component {
  render() {
    return (
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Frank_ocean_green_hair.jpg/440px-Frank_ocean_green_hair.jpg" />
        <article className="desc-frank">
          <h2>Frank Ocean</h2>
          <h3 className="frank-album">Latest album: Blonded </h3>
          <p>
            Frank Ocean (born Christopher Edwin Cooksey on October 28, 1987;
            later Christopher Edwin Breaux) is an American singer, songwriter,
            rapper, record producer, and photographer.
          </p>
        </article>
      </div>
    )
  }
}

export default Frank
