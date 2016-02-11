# react-cluster [![Build Status](https://travis-ci.org/ayrton/react-cluster.svg?branch=master)](https://travis-ci.org/ayrton/react-cluster)

React component to display large sets of data in a scroll container.

![react-cluster](https://cloud.githubusercontent.com/assets/440926/12982264/eb3eed4c-d098-11e5-8dfb-652001b1f4fb.gif)


## Usage

```jsx
<Cluster className="cluster" height={100} rowHeight={50}>
  <span />
  <span />
  <span />
  ...
</Cluster>
```

The props types of the `Cluster` component are:

```js
type Props = {
  children: Array<ReactElement>,
  className: ?string,
  height: number,
  rowHeight: number,
};
```

## Installation

```sh
$ npm install
```

## Development

To start the server:

```sh
$ npm start
```

## Tests

To run all tests:

```sh
$ npm test
```

Or you can run the linters, unit tests and check for type errors individually:

```sh
$ npm run test:lint
$ npm run test:unit
$ npm run test:flow # or ./node_modules/.bin/flow
```

## Contributing

Bug reports and pull requests are welcome on GitHub. This project is intended to be a
safe, welcoming space for collaboration, and contributors are expected to adhere
to the [Contributor Covenant](http://contributor-covenant.org/) code of conduct.

## License

```
 _________________
< The MIT License >
 -----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
