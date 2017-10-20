import Config from '~/config';

describe('config.js', () => {
    it('all() should include own object', () => {
        const def = { a: 1 };
        const conf = new Config(def);
        expect(conf.all()).to.equals(def);
    });

    it('replace() should replace current object', () => {
        const def = { a: 1 };
        const conf = new Config(def);
        conf.replace({ b: 2 });
        expect(conf.get('a', false)).to.be.false;
        expect(conf.get('b')).to.equal(2);
    });

    it('get() should lookup for a value', () => {
        const def = { a: 1 };
        const conf = new Config(def);
        expect(conf.get('a')).to.equal(1);
    });

    it('get() should lookup descendants for a value', () => {
        const def = { a: 1, b: { c: 2, d: { e: 3 } } };
        const conf = new Config(def);
        expect(conf.get('b.c')).to.equal(2);
        expect(conf.get('b.d.e')).to.equal(3);
    });
});
