const _ = require("lodash");

module.exports = function(obj, iterator, context = null) {
  let paths = Object.keys(obj);

  while(paths.length) {
    let path = paths.splice(0, 1)[0];
    let value = _.get(obj, path);

    if (_.isObject(value)) {
      let deepKeys = Object.keys(value);
      let deepPaths = deepKeys.map(key => path + "." + key);

      paths = paths.concat(deepPaths);
    };

    iterator.call(context, value, path, obj);
  };
};

