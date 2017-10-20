/**
 * The config.
 */
export class Config {
    /**
     * Contructor.
     * @param {Object} config - initial config value.
     */
    constructor(config = {}) {
        this.replace(config);
    }

    /**
     * Return current config object.
     */
    all() {
        return this.config;
    }

    /**
     * Lookup for a config value by path.
     * Path could be a dot notation string for descendant lookup.
     *
     * @param {String} path
     * @param {any} def
     * @param {Object} obj
     */
    get(path, def = null, obj = null) {
        if (!obj) {
            obj = this.config;
        }
        const found = path.split('.').reduce((v, k) => v[k], obj);
        if (found === undefined) {
            return def;
        }
        return found;
    }

    /**
     * Replace current config with a new one.
     *
     * @param {Object} obj
     */
    replace(obj) {
        this.config = obj;
    }
};

export default Config;
