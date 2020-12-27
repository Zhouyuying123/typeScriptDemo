// // private 私有，只允许内的内部使用，外部不能访问否则会报错
// // protected 同上并继承可以使用

// // 类的内部：大括号内部
// class Person{
//  name: string;// name 默认是public,在累的外部可以被调用
//  public sayhello() {
//   console.log(this.name+'say hello')
//  };
//  private age: 19;
//  protected num: number;
 
// }

// const person = new Person();
// person.name = 'zhyy'
// person.sayhello();
// console.log(person.name)
// // console.log(person.age) age private ，外部使用会报错

// class person1 extends Person{
//   num = this.num;
//  sayhello() {
//   console.log(this.num);
//  }
// }

// const p1 = new person1();
// console.log(p1.sayhello())
