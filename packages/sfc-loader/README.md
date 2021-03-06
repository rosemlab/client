# @rosemlabs/sfc-loader

~~Single file component~~ Several files container :) loader.

Why another naming? Because the main goal of this package is to be standalone.

### Options

- **fileExtension**
- **sourceMap**
- **noPad**
- **blockLangMap**

### List of special attributes on sfc block:

- **sfc** - reserved, but depends on config. User value will be ignored
- **block** - reserved. User value will be ignored
- **lang** - language of the block which will be used as file extension (as if the block was a file) in context of loaders
- **index** - reserved. User value will be ignored
- **src** - source file path. Cannot include any content, warning will be shown (probable in development mode only) otherwise

### How it works?

`SFCLoaderPlugin` goes through all `webpack` rules, clones them with some modifications and places them on top. It needs to clone instead of direct mutation of a rule to avoid issues because some existed rules can be shared between several configurations.

### Loading stages

#### `App.sfc` file

```html
<template lang="html">
  <p>Hello, world!</p>
</template>
<script lang="ts">
export default {
  name: 'App'
}
</script>
```

##### Stage 1

Get `./App.sfc` resource, parse it and generate the following code:

```javascript
import template1 from './App.sfc?sfc&block=template&index=0&lang=html'
import script1 from './App.sfc?sfc&block=script&index=0&lang=ts'

export default {
  template: [
    {
      attrs: [
        {
          name: 'lang',
          value: 'html',
        }
      ],
      data: template1,
    }
  ],
  script: [
    script1
  ],
}
```

##### Stage 2

Get `./App.sfc?sfc&block=template&index=0&lang=html` resource, get parsed result from cache and generate the following code:

```javascript
export default '<p>Hello, world!</p>'
```

##### Stage 3

Get `./App.sfc?sfc&block=script&index=0&lang=ts` resource, get parsed result from cache and generate the following code:

```javascript
export default {
  name: 'App'
}
```

#### Useful links of Webpack documentation for better understanding of SFC loader work

- [Loader category](https://webpack.js.org/configuration/module/#ruleenforce)
- [Inline loader](https://webpack.js.org/concepts/loaders/#inline)
- [Pitching loader](https://webpack.js.org/api/loaders/#pitching-loader)

### TODO

- Add injection functionality
- Add html loader
- Add stylelint and eslint handlers
- Add hot reloading
- Add minification and autoprefixer for inline styles
- Add typescript extension for sfc type
- Use `start` in `generateSourceMap`.
- Add `afterTranspile` hook.
- Add caching for template block
