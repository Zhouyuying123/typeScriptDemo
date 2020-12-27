class Boho{
 content = 'hi';
 sayHello() {
  return this.content+'你好'
 }
}

class hoBoPro extends Boho{ // 继承
 conteny = 'hi';
 sayHello () { // 重写sayhello方法
  return super.sayHello()+'帅哥'// super关键字调用父类关键字
 };
 sayLove (){
  return 'i like you'
 }
}

const obj = new hoBoPro();
console.log(obj.sayHello());
console.log(obj.sayLove());