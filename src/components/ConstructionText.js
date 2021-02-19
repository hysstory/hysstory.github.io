import React from 'react'
import {useTrail, a } from 'react-spring'
import Construction from './Construction'

function ConstructionText({open, children, ...props }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 6, tension: 750, friction: 250 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
    <div className="construction" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="welcome-text"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

export default ConstructionText