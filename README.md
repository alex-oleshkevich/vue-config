# vue-configuration
A static config plugin.

## Installation
### Add package
```bash
yarn add vue-configuration

# or via npm:
npm i vue-configuration
```

### Install plugin
```javascript
import Vue from 'vue';
import VueConfig from 'vue-configuration';
import appConfig from './config.js';
Vue.use(VueConfig, {
    config: appConfig
});
```

### Usage
Access config values in any part of app using simple API:

```javascript
this.$config.get('node');
```

Use dot-notation for keys:
```javascript
this.$config.get('node.child.leaf');
```

Default values if value not set:
```javascript
this.$config.get('node.child.leaf.empty', 'default');
```

Replace config:
```javascript
this.$config.replace({ new: 'data' });
```

Get config object:
```javascript
this.$config.all();
```

