// 接口：interface
interface girl  {// 接口
 name: string;
 age: number;
 bust: number;
 waistline?: number;// 可有可无,，非必填
 [propname: string]: any,// 可有可无，可以在后面的对象加任何属性
 say():string,// 约束方法，并且返回值是字符串
}

type Girl = string;// 类型别名

const girl1 = {
 age: 28,
 name: 'xy',
 bust: 96,
 sex: '女',// 对于propname
 say: () => {
  return ''
 },
 teach: () => {
  return 'study'
  // console.log('study')
 }
}

const screenResume = (girl1:Teacher) => {
 girl1.age>24 && girl1.bust>=90 && console.log('test')
}
screenResume(girl1);


interface Teacher extends girl{ // teacher 继承girl,并单独有自己的约束条件
 teach():string,
}
class xjj implements girl{ // 此类收到girl的约束，接口不仅可以限制对象还可以限制类
 name = '';
 age = 30;
 bust = 98;
 say = () => {
  return '=='
 };
 teach = () => {
  return 'study'
  console.log('study')
 }
}


