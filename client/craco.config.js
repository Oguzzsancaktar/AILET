const CracoAlias = require('craco-alias')

module.exports = {

  plugins: [
   
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.path.json'
      }
    }
  ],
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            use: []
          }
        ]
      }
    }
  }
}
