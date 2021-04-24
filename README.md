# cond-construct

Inspired by [Elixir's `cond`](https://elixir-lang.org/getting-started/case-cond-and-if.html#cond) this is a simpler alternative to [lodash's `_.cond`](https://lodash.com/docs/4.17.15#cond)

[![CI status](https://circleci.com/gh/mudssrali/cond-construct.svg?style=shield)](LINK)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
<a aria-label="Package size" href="https://bundlephobia.com/result?p=cond-construct">
  <img alt="" src="https://badgen.net/bundlephobia/minzip/cond-construct">
</a>

## Install

Install with npm or yarn via

```
yarn add cond-construct
```

or

```
npm i cond-construct
```

## API

```ts
type Cond = (
  pairs: Array<[boolean, unknown | (() => unknown)]>,
  options?: { strict: boolean }
) => unknown
```

## Usage

```js
import cond from 'cond-construct'

const value = cond([
  [false, 'false'],
  [true, 'true'],
  [true, 'true but too late']
])

// value === 'true'
```

You can disable strict checking by passing options as the second argument:

```js
import cond from 'cond-construct'

const value = cond(
  [
    [false, 'false'],
    [1, 'truthy'],
    [true, 'true but also too late']
  ],
  { strict: false }
)

// value === 'truthy'
```

Also works nicely with React components as you can have the values lazily evaluated by wrapping it in a function:

```jsx
import cond from 'cond-construct'

const Component = ({ hasErrors, isNew, isLoading }) => (
  <>
    {cond([
      [isLoading, () => <Loading />],
      [isNew, () => <Create />],
      [hasErrors, () => <ShowErrors />]
    ])}
  </>
)
```

### Next

- [] Handle multiple method executions
- [] Add more option for falsy value

### Note

As all predicates have to be evaluated before the right branch can be chosen, it can have a negative performance impact if you rely on heavy computations here. It's best have simple booleans and resort to `_.cond` for complex use cases.

I created this for just learning purpose for creating and publishing package to `npm.js`. If you're looking for production use-case please use `Javascript` implementation by [Erik Muller - Cond-Flow](https://github.com/erikmueller/cond-flow). Thanks
