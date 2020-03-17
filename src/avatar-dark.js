import React from 'react'
import {
  face,
  nose,
  mouth,
  eyebrows,
  eyes,
  sunglasses,
} from './path'

export default ({
  size = 768,
  width,
  shades,
  color,
  style,
  ...props
}) =>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 128 128'
    width={width || size}
    height={width || size}
    fill='currentcolor'
    style={{
      display: 'block',
      margin: 0,
      color,
      ...style,
    }}>
    <path
      d={[face, nose, mouth, eyebrows, eyes].join('')}
    />
    {shades && <path d={sunglasses} />}
  </svg>
