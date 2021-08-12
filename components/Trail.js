import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

export default function Trail ({ open, children }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { tension: 120, friction: 12, clamp: true },
      opacity: open ? 1 : 0,
      x: open ? 0 : -60,
      y: open ? 0 : 400,
      height: open ? 100 : 0,
      from: { opacity: 0, x: 0, y: 400, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }