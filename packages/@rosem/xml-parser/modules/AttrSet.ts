import camelCase from 'lodash/camelCase'
import { Mutable } from '..'
import BlankModule from '../BlankModule'
import { Attr, StartTag } from '../nodes'

declare module '@rosem/xml-parser/nodes' {
  interface StartTag {
    readonly attrSet?: {[name: string]: string}
  }
}

export default class AttrSet extends BlankModule {
  attribute<T extends Attr, U extends StartTag>(attr: T, startTag: U): void {
    startTag.attrSet![camelCase(attr.name)] = attr.value
  }

  startTag<T extends StartTag>(startTag: T): void {
    (startTag as Mutable<StartTag>).attrSet = {}
  }
}