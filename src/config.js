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

        if (!this.has(path, obj)) {
            return def;
        }
        return path.split('.').reduce((v, k) => v && v[k], obj);
    }

    /**
     * Test if path is in obj.
     */
    has(path, obj) {
        if (!obj) {
            obj = this.config;
        }
        try {
            const found = this._lookUp(path, obj);
            return (found !== undefined);
        } catch (e) {
            return false;
        }
    }

    /**
     * Replace current config with a new one.
     *
     * @param {Object} obj
     */
    replace(obj) {
        this.config = obj;
    }

    /**
     * Performs a path lookup in obj.
     *
     * @param {string} path
     * @param {Object} obj
     */
    _lookUp(path, obj) {
        return path.split('.').reduce((v, k) => v[k], obj);
    }
};

export default Config;
