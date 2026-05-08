const fs = require('fs')

 const readJSON = (path) => {
  if (!fs.existsSync(path)) return [];
  const data = fs.readFileSync(path);
  return JSON.parse(data || "[]");
};

 const writeJSON = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

module.exports = {readJSON,writeJSON};