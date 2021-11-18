import { Utils, TLBounds } from '@tldraw/core'
import Vec from '@tldraw/vec'
import { nanoid } from 'nanoid'
import { CustomShapeUtil } from 'shapes/CustomShapeUtil'
import { NodeComponent } from './NodeComponent'
import { NodeIndicator } from './NodeIndicator'
import type { NodeShape } from './NodeShape'

type T = NodeShape
type E = HTMLDivElement

export class NodeUtil extends CustomShapeUtil<T, E> {
  Component = NodeComponent

  Indicator = NodeIndicator

  getShape = (props: Partial<T>): T => {
    return {
      id: nanoid(),
      type: 'node',
      name: 'Node',
      parentId: 'page1',
      point: [0, 0],
      size: [100, 100],
      childIndex: 1,
      ...props,
    }
  }

  getBounds = (shape: T) => {
    const bounds = Utils.getFromCache(this.boundsCache, shape, () => {
      const [width, height] = shape.size

      return {
        minX: 0,
        maxX: width,
        minY: 0,
        maxY: height,
        width,
        height,
      } as TLBounds
    })

    return Utils.translateBounds(bounds, shape.point)
  }

  /* ----------------- Custom Methods ----------------- */

  canBind = true

  getCenter = (shape: T) => {
    return Utils.getBoundsCenter(this.getBounds(shape))
  }

  transform = (shape: T, bounds: TLBounds, initialShape: T, scale: number[]) => {
    shape.point = [bounds.minX, bounds.minY]
    shape.size = [bounds.width, bounds.height]
  }
}
