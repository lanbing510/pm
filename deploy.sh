#!/bin/sh
npm run build
cd ./build
git add .
git commit -m 'push to gh-pages'
git push --force git@github.com:lanbing510/pm.git master:gh-pages
