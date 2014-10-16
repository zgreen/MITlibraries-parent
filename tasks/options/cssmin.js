module.exports = {
	options: {
		keepSpecialComments: 0
	},
  combine: {
    files: {
      'css/build/minified/global.css': ['css/build/prefixed/global.css'],
      'css/build/minified/news-global.min.css': ['css/build/prefixed/news-global.css']
    }
  }
}