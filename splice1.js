var arr=["Monday","Tuesday","Thursday","Friday"]; 
var start=2;
deletecount=0; 
var result=arr.splice(start,deletecount,"Wednesday") ;

console.log(arr);
var arr1=["Monday","Tuesday","Saturday","Sunday","Thursday","Friday"];  
// var start1=1;
// deletecount1=2;
// var result1=arr1.splice(start1,deletecount1,"Wednesday") ;
// console.log("removed elements-->",result1);
// console.log(arr);
var result2=arr1.splice(4);

console.log("removed elements-->",result2);


