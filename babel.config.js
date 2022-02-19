module.exports = {
  env: {
    test: {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
      plugins: ["babel-plugin-transform-vite-meta-env"],
    },
  },
};
