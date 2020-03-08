module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: './',
  devServer: {
    proxy: 'http://localhost:8080',
    public: 'http://localhost:8080',
    }
}