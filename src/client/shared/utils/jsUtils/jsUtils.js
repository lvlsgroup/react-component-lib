export function getSortedObject(obj) {
  const ordered = {};
  Object.keys(obj)
    .sort()
    .forEach(function(key) {
      ordered[key] = obj[key];
    });
  return ordered;
}

export function areArraysEqual(value, other) {
  // Get the value type
  var type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  var valueLen =
    type === '[object Array]' ? value.length : Object.keys(value).length;
  var otherLen =
    type === '[object Array]' ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  var compare = function(item1, item2) {
    var isEqual = function(value, other) {
      // Get the value type
      var type = Object.prototype.toString.call(value);

      // If the two objects are not the same type, return false
      if (type !== Object.prototype.toString.call(other)) return false;

      // If items are not an object or array, return false
      if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

      // Compare the length of the length of the two items
      var valueLen =
        type === '[object Array]' ? value.length : Object.keys(value).length;
      var otherLen =
        type === '[object Array]' ? other.length : Object.keys(other).length;
      if (valueLen !== otherLen) return false;

      // Compare two items
      var compare = function(item1, item2) {
        // Get the object type
        var itemType = Object.prototype.toString.call(item1);

        // If an object or array, compare recursively
        if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
          if (!isEqual(item1, item2)) return false;
        }

        // Otherwise, do a simple comparison
        else {
          // If the two items are not the same type, return false
          if (itemType !== Object.prototype.toString.call(item2)) return false;

          // Else if it's a function, convert to a string and compare
          // Otherwise, just compare
          if (itemType === '[object Function]') {
            if (item1.toString() !== item2.toString()) return false;
          } else {
            if (item1 !== item2) return false;
          }
        }
      };

      // Compare properties
      if (type === '[object Array]') {
        for (var i = 0; i < valueLen; i++) {
          if (compare(value[i], other[i]) === false) return false;
        }
      } else {
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            if (compare(value[key], other[key]) === false) return false;
          }
        }
      }

      // If nothing failed, return true
      return true;
    };

    // Get the object type
    var itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    }

    // Otherwise, do a simple comparison
    else {
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  };

  // Compare properties
  if (type === '[object Array]') {
    for (var i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  }

  // If nothing failed, return true
  return true;
}

export function toggleArrayValue(array, value) {
  const index = array.indexOf(value);

  if (index === -1) {
    array.push(value);
  } else {
    array.splice(index, 1);
  }

  return array;
}

export function immutablePush(arr, newEntry) {
  return [...arr, newEntry];
}

/*
const someObj = {person: {firstName: 'Test', lastName: 'TestLast'}};
var property = 'person.lastName';
deletePropertyPath(someObj, property); === {person: {firstName: 'Test'}};
 */
export const deletePropertyByPath = (object, path) => {
  let currentObject = object;
  let parts = path.split('.');
  const last = parts.pop();
  for (const part of parts) {
    currentObject = currentObject[part];
    if (!currentObject) {
      return;
    }
  }
  delete currentObject[last];
};

/* Sort an array by a given key and optionally reveresed sort order */
export const sortArrayByKey = (array, key, reversed) => {
  if (key === '' || !key) return array;
  return reversed
    ? array.sort((a, b) => (a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0))
    : array.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
};

export const filterArrayByKeyValue = (array, key, value) => {
  return array.filter((item) => {
    return item[key].toLowerCase().indexOf(value.toLowerCase()) !== -1;
  });
};

export function getChunkedArray(array, chunkSize) {
  return (
    array &&
    array.reduce &&
    array.reduce((accum, item, index) => {
      const isNewChunk = index % chunkSize === 0;
      if (isNewChunk) {
        accum.push([item]);

        return accum;
      } else {
        const currentChunkIndex = accum.length - 1;
        accum[currentChunkIndex].push(item);

        return accum;
      }
    }, [])
  );
}
