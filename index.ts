type Input = (number | string)[];

function getsFirstElement(arr: Input): (string | number){
    return arr[0];
}

let ans1 = getsFirstElement([4,2,3]);
let ans2 = getsFirstElement(["4","2","3"]);
console.log(ans1);
console.log(ans2);
//ans2.toLowerCase(); // error case

// But one problem with the above code is even ans2 is a string data type but we can perform string operations to the variable. Because typescript assumes that it as string or number

// other way is provide strict type. By giving generic type

function getFirstItem<T>(arr: T[]) {
    return arr[0];
}

let a = getFirstItem([4,2,3]);
let b = getFirstItem(["ONE","2","3"]);
console.log(a);
console.log(b);
// now b is considered as string here.

console.log(b.toLowerCase());  // not an error