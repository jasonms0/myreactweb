/* eslint-disable */
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
const withImages = require('next-images')

const withPlugins = require("next-compose-plugins");

const style = [
  [withCss, {

  }],
  [withLess, {

  }],
  [withFonts, {

  }],
  [withImages, {

  }],
]

module.exports = withPlugins([...style],{
  distDir: 'dist',
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
})
