/** @type {import('next').NextConfig} */

const { parsed: localEnv } = require("dotenv").config({
  path: ".env"
})
const webpack = require("webpack")

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(localEnv)
    )
    return config
  }
}