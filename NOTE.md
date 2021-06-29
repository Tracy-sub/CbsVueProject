## 2021.6.29
  **插件:**
  ``` javaScript
  Vue.use();
  install;
  ```
  ### @路径设置
  build/webpack.base.config.js 设置

  ```   javaScript
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '#': resolve('src/assets')
    }
  }
  ```


