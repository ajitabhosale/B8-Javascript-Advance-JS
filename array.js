var student=["ajita","bhavesh", "satish"];
console.log(student);
var newarray=["apple","banana","capsicum", "grapes"];
// conacatenation of array
console.log(newarray);
var arr1=["c","c++","java"];
var arr2=["javascript","python"];
var arr3=["sql","html"]
// two array concat
var result=arr1.concat(arr2);
console.log(result);
// three array concat
var result1=arr1.concat(arr2,arr3);
console.log(result1);
// direct element two array concat
var result2=arr1.concat("ruby","kotlin");
console.log("diresct element concat--> " ,result2);
var result4=arr1.includes("java");
console.log(result4);
var result5=arr1.indexOf("c++")
console.log(result5);
var result6=arr1.indexOf("php");
console.log(result6);
var result7=arr1.indexOf("java",1);

console.log(result7);