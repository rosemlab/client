import HyperManipulator from '@rosem/virtual-dom/HyperManipulator'

const hyperRenderer = new HyperManipulator()
const h = (hyperRenderer.createInstance = hyperRenderer.createInstance.bind(
  hyperRenderer
))

const vnode = h(
  'svg',
  {
    namespace: 'http://www.w3.org/2000/svg',
    attrs: {
      viewBox: '0 0 100 150',
    },
  },
  [
    h('P', 'pipi'),
    h('use', {
      attrs: {
        'xlink:href': {
          namespace: 'http://www.w3.org/1999/xlink',
          value: '#icon-test',
        },
      },
    }),
    h('ul', [
      h(2, 'Some text'),
      h(3, ['Some comment']),
      h('li', 'item 1'),
      h('li', ['item 2']),
      h([h('li', 'item 3'), h('', 'item 4')]),
      h(0, [h('li', 'item 5'), 'item 6']),
    ]),
  ]
)
