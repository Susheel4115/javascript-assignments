function getEven(arr) {
  /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */

  let the_evens = arr.filter((element, index) => element % 2 == 0);

  return the_evens;
}

function multiplyByN(arr, n) {
  /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
  the_muls = arr.map((x) => x * n);
  return the_muls;
}

function removeNthElement(arr, n) {
  /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */

  arr.splice(n, 1);
  return arr;
}

arr = [1, 2, 3, 4, 5];
console.log(getEven(arr));
console.log(multiplyByN(arr, 2));
console.log(removeNthElement(arr, 0));

module.exports = {
  getEven,
  multiplyByN,
  removeNthElement,
};
