A wrapper of a wrapper for [Lo-Dash](http://lodash.com), a JavaScript utility library delivering consistency, modularity, performance, & extras. Lo-Dash can be used as a drop-in replacement for [Underscore.js](http://underscorejs.org).

This package is a fork of https://github.com/erasaur/meteor-lodash with one minor tweak: it plays nicer with Underscore:

```
_ //=> underscore
lodash //=> lodash
```

#### Usage

```
meteor add adelevie:meteor-lodash
```

The package exports `_` as a global variable.

#### Why use Lo-Dash?

Lo-Dash is known to be generally more performant than Underscore, and has a set of [features](https://lodash.com/#features) that Underscore lacks.

#### Why use this fork?

Lo-Dash is great, but Meteor (and a lot of its libraries) still depend on Underscore. This package lets you safely add Lo-Dash without risking breaking things.

### Versioning

Wrapping wrappers is sort of new to me (so is Atmosphere), so I'll just track the versioning of https://github.com/erasaur/meteor-lodash for now.
