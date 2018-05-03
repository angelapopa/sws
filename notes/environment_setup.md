### Environment Setup

Preparation:
* install an IDE, e.g. VS Code https://code.visualstudio.com/
* install Postman https://www.getpostman.com/apps

  ** test if postman works by creating a GET request to https://api.github.com/

* install Node.js, the LTS version, https://nodejs.org/en/
 if you don't have node installed already

  ** `npm init` (to generate a package.json) - needed only at project initialisation

  ** `npm install express` - needed only at project initialisation

* install `MongoDB` Community Edition https://www.mongodb.com/
* start mongodb `"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath "\your\path\to\db\data"`. For Unix Systems `sudo service mongod start` (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

* (optional) install mongoose library to help model the db entries
 `npm mongoose`

* install Robo 3T https://robomongo.org/ and follow the setup instructions on the online site (incl. creating a new folder on disk for db data).

* import the dataset into a database schema and configure it's name in `server.js`

  ** import the file `dataset\hotels.json` with
  `mongoimport --db swshotels --collection hotels --file "<path_to_project>\datasets\hotels.json"`

* install nodemon (`npm install --save nodemon`), this will update the js files on the servers on change

* install babel (`npm install --save-dev babel-preset-env`). Create a `.babelrc` file with following content `"presets" : ["env"]`.

* install `npm install --save body-parser`
