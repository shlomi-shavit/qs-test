# ready-npm-project

# Installing:
1) Open git Bash at this folder.
2) Type `npm install` ( Wait for node_modules folder to be fully installed ).
3) Type `npm start` ( Run the project on a local server and open the project automatically in the browser )<br />

# More details (Not necessary):
4) Type `npm run build` to minify html.
5) Type `npm run prod:img-compress` to compress al images.
6) Type `npm run prod:js-uglify` to minify js file.
<br />

7) Development or Production enviroment:<br />
package.json: <br />
"scripts": { <br />
For development mode type `dev:*` and then enter `npm start` on terminal.<br />
Example:<br />
`npm-run-all --parallel dev:*` <br />
For production mode use `prod:*` and then enter `npm start` on terminal.<br />
Example:<br />
`npm-run-all --parallel prod:*` <br />
} 
