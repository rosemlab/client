# @rosem/observer

## API

```javascript
import { state, computed, observe } from '@rosem/observer'

const data = state({ count: 1 })
const plusOne = computed(() => data.count + 1)

observe(plusOne, value => {
  console.log(`count + 1 is ${value}`)
})
```