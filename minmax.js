let arr= new Array();

for (let index = 0; index < 10; index++) {
    arr[index] = Math.floor((Math.random() * 900) + 100);
}
console.log(arr);

let large=arr[0];
let secondlarge=arr[0];
for(let i=0;i<arr.length;i++){
    if(large<arr[i]){
      secondlarge=large;
      large=arr[i];
    }
}
console.log("Second largest number:"+secondlarge);

let smallest=arr[0];
let secondsmallest=arr[0];
for(let i=0;i<arr.length;i++)
{
     if(arr[i]<smallest){
       secondsmallest=smallest;
       smallest=arr[i];
     }   
}
console.log("Second smallest number:"+secondsmallest);

