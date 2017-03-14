/*
map = {'0': ['A', 'B'], '1': ['C', 'D'], '9': ['Z']};

// '019' -> ['ACZ', 'ADZ', 'BCZ', 'BDZ']

*/

const stringMap = function(map, ints, resultString = '', results = []) {
  if (!ints.length) {
    results.push(resultString);
    return [];
  }

  map[ints[0]].forEach(string => {
    stringMap(map, ints.slice(1, resultString + string, results));
  });

  return results;
}

export default stringMap;
