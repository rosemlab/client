export { default as RendererAPI } from './Renderer'
export { default as HydratorAPI } from './Hydrator'

export const enum NodeType {
  ELEMENT_NODE = 1,
  ATTRIBUTE_NODE = 2,
  TEXT_NODE = 3,
  CDATA_SECTION_NODE = 4,
  ENTITY_REFERENCE_NODE = 5,
  ENTITY_NODE = 6,
  PROCESSING_INSTRUCTION_NODE = 7,
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  DOCUMENT_TYPE_NODE = 10,
  DOCUMENT_FRAGMENT_NODE = 11,
}

export const enum NodeName {
  TEXT_NODE = '#text',
  CDATA_SECTION_NODE = '#cdata-section',
  COMMENT_NODE = '#comment',
  DOCUMENT_FRAGMENT_NODE = '#document-fragment',
}
