/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    //see http://styled-components.com/docs/tooling#babel-plugin for more information
    styledComponents: {

      displayName: true,

      ssr: true,

      fileName: true,

      topLevelImportPaths: [],

      meaninglessFileNames: ["index"],

      cssProp: true,

      namespace: "",

      minify: true,

      transpileTemplateLiterals: false,

      pure: false,

    },
  },
}

module.exports = nextConfig


