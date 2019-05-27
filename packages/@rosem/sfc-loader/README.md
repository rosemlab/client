### SFC loader stages

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

- Stage 1

Get `./App.sfc` resource, parse it and generate the following code:

```javascript
import template1 from './App.sfc?sfc&section=template&index=0&lang=html'
import script1 from './App.sfc?sfc&section=script&index=0&lang=ts'

export default {
  template: [
    template1
  ],
  script: [
    script1
  ],
}
```
- Stage 2

Get `./App.sfc?sfc&section=template&index=0&lang=html` resource, get parsed result from cache and generate the following code:

```javascript
export default '<p>Hello, world!</p>'
```

- Stage 3

Get `./App.sfc?sfc&section=script&index=0&lang=ts` resource, get parsed result from cache and generate the following code:

```javascript
export default {
  name: 'App'
}
```