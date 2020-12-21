// 类型注解
let count: number;
count = 12;

// 鼠标移上去会看到被定义成了number类型，这就是类型推断
let countInter = 12;



function add(a: number, b: number) {// 类型注解
 return a + b;
}

const total = add(1, 2)

//  总结：写 TypeScript 代码的一个重要宗旨就是每个变量，每个对象的属性类型都应该是固定的，
//  如果你推断就让它推断，推断不出来的时候你要进行注释