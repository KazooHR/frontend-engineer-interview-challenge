export function getSwcLoader({ develop }: { develop: boolean }) {
  return {
    test: /\.(j|t|)sx?$/,
    exclude: /(node_modules)/,
    use: {
      loader: "swc-loader",
      options: {
        sourceMaps: true,
        minify: true,
        module: {
          type: "es6",
          lazy: true,
        },
        isModule: true,
        jsc: {
          target: "es2015",
          keepClassNames: true,
          parser: {
            syntax: "typescript",
            tsx: true,
            dynamicImport: true,
          },
          transform: {
            react: {
              runtime: "classic",
              ...(develop ? { development: true, refresh: true } : {}),
            },
          },
        },
      },
    },
  };
}
