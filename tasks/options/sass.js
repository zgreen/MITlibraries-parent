module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'css/build/global.css': 'css/global.scss',
      'css/build/news-global.css' : 'css/news-global.scss'
    }
  }
}