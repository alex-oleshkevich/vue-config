import Config from './config';

export default {
    install(Vue, options) {
        Vue.prototype.$config = new Config(options.config || {});
    }
};
