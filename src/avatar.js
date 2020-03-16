import React from 'react'
import path from './path'

export default ({
  size = 768,
  pad = true,
  color = 'currentcolor',
  style,
  width,
  height,
  ...props
}) => {
  const viewBox = pad ? '-32 -32 192 192' : '0 0 128 128'

  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewBox}
      width={width || size}
      height={height || size}
      fill={color}
      style={{
        display: 'block',
        margin: 0,
        ...style
      }}>
      <path d={path} />
    </svg>
  )
}
