# MERN Tutorial

https://www.youtube.com/watch?v=CvCiNeLnZ00

`npm init -y`       get `package.json`
`npm i express`     install `express`
`npm i nodemon -D`  get nodemon in dev deps to reload on changes

add to `package.json`
```
  "scripts": {
    "start": "node server",
    "dev": "nodemon server"
  },
```

Create git ignore, and add `node_modules`

`server.js`: 
- add `express` and define `app` and `PORT`.
- add `path` and `use` static path.

```
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "date-fns": "^2.30.0",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongodb": "^6.1.0",
    "mongoose": "^7.6.0",
    "uuid": "^9.0.1"
  }
```

cors = Cross Origin Resource Sharing, have to enable to allow pubic requests.
dotenv = Allows the use of environment variables, add .env to .gitignore, as will contain secrets.
mongoose = MongoDB helper.


Test with Postman.

Add to headers:
- Content-Type = application/json

Add to body:
- Select raw json
- Add 
    ```
    {
        "username": "Alex",
        "password": "!Asd%12345",
        "roles": ["admin"]
    }
```


To create the project, run `npx create-react-app <project name>`, and will create a dir with the project.

get `npm i react-router-dom`

get `npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome`

get `npm i @reduxjs/toolkit react-redux`

run node, then `require('crypto').randomBytes(64).toString('hex')`


react app is a static site - npm build, build
the api is a node.js rest api webservice - npm install, npm start 