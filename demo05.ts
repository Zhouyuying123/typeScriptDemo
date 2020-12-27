function add1(a: number, b: number) {
 return a + b
}
const getTotal = add1(3, 5);

// 上面这时候add函数返回值的类型不可控，需要如下处理：

// function add(a: number, b: number): number {
//  return a + b
// }

function sayHi(): void { // viod代表无返回值

}

function errorTrow(): never {// never ,永远执行不完
 throw new Error();
 console.log('error') // 无法访问
}

// 函数参数为解构对象的时候
function reduce({ a, b }: { a: number, b: number }): number {
 return a - b
}

const num = reduce({ a: 3, b: 6 });


function sin({ a }: { a: number }): number {
 return a
}