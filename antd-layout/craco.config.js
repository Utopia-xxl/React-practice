const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@layout-header-height': '15vh' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};