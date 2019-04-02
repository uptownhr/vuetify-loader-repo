const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

export default {
  /*
  ** Headers of the page
   */
  dev: true,
  build: {
    extractCSS: false,
    extend (config, {isDev, isClient}) {
      config.devtool = (isDev ? 'cheap-module-eval-source-map' : 'source-map')
    },

    postcss: [
      require('autoprefixer')({browsers: ['last 2 versions']})
    ],
    cssSourceMap: true,
    plugins: [new VuetifyLoaderPlugin({})],
    transpile: [/^vuetify/]
  },
  plugins: [
    '~plugins/vuetify.js',
  ],

  /*
  ** Global CSS
  */
  //css: [{ src: '~assets/css/index.scss', lang: 'scss'},{ src: '~assets/stylus/index.styl', lang: 'styl' }],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#28c5aa' },

  render: {
    compressor: {
      threshold: '1kb'
    },
    resourceHints: false,
    static: {
      maxAge: 1000 * 60 * 60 * 12
    }
  }
}
