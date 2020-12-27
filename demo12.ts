// 构造函数

class Person {
 public name: string;
 constructor(name: string) { // constructor是一个构造函数方法，创建对象时自动调用该方法
  this.name = name;//  this指的是实例化对象
  
 }
}

const person = new Person( 'zyy');