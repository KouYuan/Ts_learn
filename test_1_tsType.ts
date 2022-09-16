let messge: string = "222";
let myAge: number = 21
let happy: boolean = false

happy = false
// TS的对象类型无法读取属性
const myInfo: object = {
    name: 'YEs',
    age: 30
}

// console.log('kkk',myInfo.age)  报错
// Symbol类型

const s1:symbol = Symbol('teacheer')
const s2:symbol = Symbol('dancer')
const person: object = {
    [s1]: '老师',
    [s2]: '舞者'
}
 // null 与 underfind
// 既是自己的类型也是自己的值， 不那再次赋值

const testNull:null = null;
const tsetUnderfind:undefined = undefined;

// any 任意类型
// unKnown 未知类型
// 当函数没有有返回值时候为 void
const mySchool:string = 'Pk '

function getMySchool(): void {
    mySchool + ' university'
}
function getAllneme(School:string): string {
    return School + ' 999'
}

getMySchool()
getAllneme(mySchool) //
// never:函数，永远不会发生值处理，或者是处理报错信息时候用never，

// tuple 元组：有序，有固定个数的数组
let students: [number, number, string] = [2, 2, '5']

