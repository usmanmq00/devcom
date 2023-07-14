const { parse } = require("parse5");
const fs = require('fs');

exports.htmlParse = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, html) => {
      if (err) return reject(err);
      const domonTree = parse(html)
      const data = domonTree.childNodes[1] === undefined ? domonTree.childNodes[0] : domonTree.childNodes[1]
      return resolve(data)
    });
  });
}

exports.tagsTable = (array) => {
  let arr = []
  function flatten(array) {
    array.map((item) => {
      if (item && Array.isArray(item.childNodes) && item?.tagName) {
        const exit = arr.find(element => element.tagName === item.tagName);
        if (exit) {
          exit.count++
          flatten(item.childNodes)
        } else {
          let obj = { tagName: item.tagName, count: 1 }
          arr.push(obj)
          flatten(item.childNodes)
        }
      }
    })
    return arr;
  }
  return flatten(array);
}