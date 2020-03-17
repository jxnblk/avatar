import React from 'react'
import Avatar from './avatar-dark'

export default ({
  color = 'black',
  bg = 'white',
  ...props
}) =>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 768 768'
    width={768}
    height={768}
    style={{
      display: 'block',
      margin: 0,
    }}>
    <circle
      fill={bg}
      cx={384}
      cy={384}
      r={384}
    />
    <g transform='translate(128 128)'>
      <Avatar
        {...props}
        color={color}
        width={512}
        height={512}
      />
    </g>
  </svg>

