install: install-deps

start:
	npm start

start-d:
	npm run start:dev

install-deps:
	npm ci

test:
	npm test

test-debug:
	npm run test:d

lint:
	npx eslint .