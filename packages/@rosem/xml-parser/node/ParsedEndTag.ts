import MatchRange from './MatchRange'

export default interface ParsedEndTag extends MatchRange {
  name: string
  prefix?: string
  localName: string
  nameLowerCased: string
}
