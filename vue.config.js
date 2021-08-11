module.exports = {
    pwa: {
      name: 'Mateusz Słotwiński',
      themeColor: '#00647d',
      appleMobileWebAppCapable: 'yes',
      workboxPluginMode: 'GenerateSW'
    },
    configureWebpack: {
      devServer: {
        historyApiFallback: true
      }
    },
    devServer: {
      port: 80
  }
  }