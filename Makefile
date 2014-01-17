
build:
	browserify app.js | uglifyjs > js/bundle.js

