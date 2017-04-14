/*
  Given the array of IDs, which contains many duplicate integers and one unique integer,
  find the unique integer.

  The IDs are not guaranteed to be sorted or sequential.

  https://www.interviewcake.com/question/javascript/find-unique-int-among-duplicates

*/

function findUnique(arr) {
  const map = new Map(); // Only keep track of uniques
  let unique = null;

  arr.forEach(n => {
    if (map.has(n)) {
      map.delete(n);
    } else {
      map.set(n, true);
    }
  });

  for (let [key, value] of map) {
    unique = key;
  }

  return unique;
};

export default findUnique;
