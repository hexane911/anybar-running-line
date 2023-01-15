const fs = require("fs");

const readNotes = (dir) => {
  
  const names =  fs.readdirSync(dir, (err, files) => {
    if (err) {
      console.log("Cannot find the directory");
      return;
    }
    
    return files
  });

  return names.map(el => {
    return fs.readFileSync(`${dir}/${el}`).toString()
  })

};

module.exports = readNotes