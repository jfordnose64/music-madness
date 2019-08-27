import React, { Component } from 'react'

export class MacMiller extends Component {
  render() {
    return (
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mac_Miller_%287%29_%E2%80%93_splash%21_Festival_20_%282017%29_%28cropped%29.jpg/440px-Mac_Miller_%287%29_%E2%80%93_splash%21_Festival_20_%282017%29_%28cropped%29.jpg" />
        <article className="desc-mac">
          <h1 className="mac-name">Mac Miller</h1>
          <h3 className="mac-album">Latest Album: Swimming</h3>
          <p>
            Malcolm James McCormick (January 19, 1992 – September 7, 2018),
            known professionally as Mac Miller, was an American rapper, singer,
            songwriter, and record producer
          </p>
        </article>
      </div>
    )
  }
}

export default MacMiller
