let arr= new Array();

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor((Math.random() * 900) + 100);
}
console.log(arr);
let sorted=arr.sort();
console.log(sorted);

console.log("Second smallest:"+arr[1]);
console.log("Second largest:"+arr[arr.length-2]);
