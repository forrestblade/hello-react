import React from 'react'

const GifImages = (props) => {
  return (
    <div class="cf pa4">
      {props.gifs.data && props.gifs.data.map(gif => {
        return (
          <div className="fl pa2 w-50 w-20-ns">
            <a key={gif.key} href={gif.url} className="db aspect-ratio aspect-ratio--1x1 dim">

              <span style={{ backgroundImage: `url(${gif.images.original.url})` }} className="bg-center cover aspect-ratio--object" />
            </a >
          </div >
        )
      })}
    </div>
  )
}

export default GifImages