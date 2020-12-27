//数组
const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ['1'];
const arr: (number | string)[] = [2, '333'];

type lady = { // 类型别名,一处定义处处使用
 name: string,
 age:number,
}
const xy: lady[] = [{ name: '小黑', age: 19 }, { name: '小白', age: 18 }];// 数组对象

