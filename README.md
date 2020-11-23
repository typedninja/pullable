# @typedninja/pullable

> Async generator transformation library

## Install

```
$ yarn add @typedninja/pullable

$ npm install --save @typedninja/pullable
```

## Usage

Also see the [API documentation](https://typed.ninja/pullable/).

```typescript
import { from, map } from "@typedninja/pullable";

const multiplied = from([ 1, 2, 3, 4 ]).pipe(
  map(num => num * 2),
);

for await (const num of multiplied) {
  console.log(num);
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
