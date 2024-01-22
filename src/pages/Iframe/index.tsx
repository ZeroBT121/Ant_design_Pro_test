import React from 'react'
// import { KeepAlive } from 'umi'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

const MyIframe = () => {
  return (
    <div
      style={{
        margin: 10,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        // marginTop: -12,
        height: 820,
      }}
    >
      <KeepAlive>
        <iframe
          allow={'fullscreen'}
          referrerPolicy={'unsafe-url'}
          style={{ border: 'none' }}
          src="https://work.jiushuyun.com/decision/shared/dd7a262d"
          width="100%"
          height="100%"
        ></iframe>
      </KeepAlive>
    </div>
  )
}

export default MyIframe