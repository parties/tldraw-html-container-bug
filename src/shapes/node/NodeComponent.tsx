import * as React from 'react'
import { TLShapeUtil, SVGContainer, HTMLContainer } from '@tldraw/core'
import type { NodeShape } from './NodeShape'

export const NodeComponent = TLShapeUtil.Component<NodeShape, HTMLDivElement>(
  ({ events, shape, meta, isHovered, isSelected }, ref) => {
    const color = meta.isDarkMode ? 'white' : 'black'

    const style = React.useMemo(
      () => ({
        width: shape.size[0],
        height: shape.size[1],
        border: `3px solid ${color}`,
        borderRadius: 4,
        padding: 2,
      }),
      [shape, color]
    )

    return (
      <HTMLContainer ref={ref} {...events}>
        <div style={style}>
          <div style={{ borderBottom: '1px solid black' }}>Title</div>
          <div>Here I am, rock you like a hurricane.</div>
          <pre>{JSON.stringify({ isHovered, isSelected }, null, 2)}</pre>
        </div>
      </HTMLContainer>
    )
  }
)

export const NodeComponentSvg = TLShapeUtil.Component<NodeShape, SVGSVGElement>(
  ({ shape, events, meta }, ref) => {
    const color = meta.isDarkMode ? 'white' : 'black'

    return (
      <SVGContainer ref={ref} {...events}>
        <rect
          width={shape.size[0]}
          height={shape.size[1]}
          stroke={color}
          strokeWidth={3}
          strokeLinejoin="round"
          fill="none"
          rx={4}
          pointerEvents="all"
        />
      </SVGContainer>
    )
  }
)
