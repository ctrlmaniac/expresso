const fs = require("fs");
const path = require("path");
const _ = require("lodash");

const findApi = (app, source, basePath) => {
  const api = fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  _.forEach(api, (dir) => {
    const index = path.join(source, dir, "index.js");

    if (fs.existsSync(index)) {
      const router = require(path.join(source, dir));
      app.use(`${basePath}/${dir}`, router);
    }

    findApi(app, path.join(source, dir), `${basePath}/${dir}`);
  });
};

module.exports = findApi;
