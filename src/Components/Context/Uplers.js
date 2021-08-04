import React from 'react'

import PhotosContext from './PhotosContext'
import ThemeContext from './ThemeContext'

// Use functional or class component based on your preference.
// Make it a default export.

export default function PhotosList() {
  return (
    <PhotosContext.Consumer>
      {(value) => {
        const { photos, fetchPhotos } = value
        return (
          <ThemeContext.Consumer>
            {(themes) => {
              const { theme } = themes
              return (
                <>
                  <div
                    id='photos-list-container'
                    style={{
                      background: theme === 'light' ? 'white' : 'black',
                      height: '50px',
                      width: '150px'
                    }}
                  >
                    <ul id='photos-list'>
                      {photos &&
                        photos.map((photosValue) => {
                          const { title, imgSrc } = photosValue
                          return (
                            <li key={title}>
                              <h3
                                style={{
                                  color: theme === 'light' ? 'black' : 'white'
                                }}
                              >
                                {title}
                              </h3>
                              <img src={imgSrc} alt={imgSrc} />
                            </li>
                          )
                        })}
                    </ul>
                    <button onClick={fetchPhotos} id='fetch-photos'>
                      Fetch photos
                    </button>
                  </div>
                </>
              )
            }}
          </ThemeContext.Consumer>
        )
      }}
    </PhotosContext.Consumer>
  )
}
