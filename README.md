# expresso

A template for building expressjs and vite fullstack websites

## Commands

- **watch:app**: `npm run watch:server` run the application server.
- **build**: `npm run build` will build the client directory and move the dist folder into the app directory.

## Directories explained

- **app** is the main directory where all the code will live. It is also the directory that will live on the server.
  - **app/sever** is the server directory where express is developed.
  - **app/client** is the directory where all the compiled code from the folder **client** will be deployed. This folder won't be committed to git.
  - **app/media** is the directory where all the uploaded files will live. This directory won't be committed to git.
- **client** is the directory where the client will have to be developed. It is built with **vite**.
