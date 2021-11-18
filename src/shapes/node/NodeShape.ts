import type { TLShape } from '@tldraw/core'

export interface NodeShape extends TLShape {
  type: 'node'
  size: number[]
}
