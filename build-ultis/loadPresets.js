const { merge } = require("webpack-merge");

const applyPresets = (env= {presets: []}) => {
    const presets = env.presets || [];
    // spread syntax [].concat(...[{value: 1, label: 'foo'}, {value: 2, label: 'bar'}]) => [{value: 1, label: 'foo'}, {value: 2, label: 'bar'}]
    /**
     * @type {string[]}
     */
    const mergePresets = [].concat(...[presets]);
    const mergeConfigs = mergePresets.map(presetName => require(`./presets/webpack.${presetName}`)())
    return merge({}, ...mergeConfigs)
};
// CommonJS syntax
module.exports = applyPresets;
