import Vue from 'vue';
import Plugin from '~/index';

describe('index.js', () => {
    it('should use initial config from options', () => {
        const config = { foo: 'bar' };
        Vue.use(Plugin, {
            config: config
        });

        const vm = new Vue(Vue.extend({}));
        expect(vm.$config.all()).eqls(config);
        expect(Vue.conf).to.be.undefined;
    });
});
