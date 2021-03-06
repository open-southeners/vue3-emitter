# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2022-06-21

### Fixed

- Move `@vueuse/shared` to dependencies so it can detect current Vue instance

## [2.0.1] - 2022-06-10

### Fixed

- Subscribe off handler checking if function type or not (safety check)

## [2.0.0] - 2022-02-20

### Changed

- **Breakchange: Now there is no default export, please check README installation part.**

**Before:**

```js
import emitter from 'vue3-emitter'
```

**After:**

```js
import { emitter } from 'vue3-emitter'
```

### Added

- Jest unit tests
- Vue functional components: Emit & Listen
- UMD build

### Removed

- Package isn't an ES module (Jest doesn't support them yet)

## [1.0.0] - 2022-02-07

### Added

- Initial release
