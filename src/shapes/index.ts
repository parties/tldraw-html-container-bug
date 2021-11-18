import { ArrowShape, ArrowUtil } from './arrow'
import { BoxShape, BoxUtil } from './box'
import { NodeShape, NodeUtil } from './node'
import type { CustomShapeUtil } from './CustomShapeUtil'

export * from './box'
export * from './node'

export type Shape = BoxShape | ArrowShape | NodeShape

export const shapeUtils = {
  box: new BoxUtil(),
  arrow: new ArrowUtil(),
  node: new NodeUtil(),
}

export const getShapeUtils = <T extends Shape>(shape: T | T['type']) => {
  if (typeof shape === 'string') return shapeUtils[shape] as unknown as CustomShapeUtil<T>
  return shapeUtils[shape.type] as unknown as CustomShapeUtil<T>
}
