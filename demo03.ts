
const girl2: { // 对象类型
 name: string,
 age: number,
} = {
 name: 'djj',
 age: 18,
}
console.log(girl2);


const girlArr: String[] = ['', '']  // 数组类型


class A {
 constructor() { // 类类型
  const name: string = 'djj'
 }
}

const b: A = new A();
console.log(b, 'b')

interface girl3 { // 函数类型
 name: string
}
const girl3: () => string = () => {
 return '';
}

