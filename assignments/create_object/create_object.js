function CreateObject(arr) {
  // Write your code here
  (keys = []), (values = []), (obj = {});
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      keys.push(arr[i]); //0 2 4 6 //["firstName", "Yash", "lastName", "Goyal"]
    } else {
      values.push(arr[i]); //1 3 5 7
    }
  }
  //keys = ["firstName","lastName"] values = ["Yash","Goyal"]
  for (let i = 0; i < values.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
  //   let obj = Object.fromEntries(arr);
}

module.exports = CreateObject;

const arr = ["firstName", "Yash", "lastName", "Goyal"];

console.log(CreateObject(arr));

//[1,2,4,5,2] =>
// obj = {firstName:Yash,lastName:Goyal}
