
app.js: build

build:
	browserify app.js | uglifyjs > js/bundle.js

watch:
	nodemon --watch app.js --watch node_modules --exec "make" app.js

.PHONY: app.js build watch

