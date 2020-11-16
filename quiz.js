setImmediate( () =>
console.log("setImmediate")) ;

process.nextTick(() =>
console.log("nextTick"));

setTimeout(() =>
console.log("setTimeout"), 0);

new Promise(res => res ()). then(() =>
console.log("Promise")) ; 
