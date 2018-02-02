// export var firstName = 'Michael';
// /*export var lastName = 'Jackson';
// export var year =1958;
// var m = 1;
// var n = 2;
// export{m as m1,n as n1,m as m2};
// console.log(m);
// console.log(n);*/
// console.log(firstName);

// /*export var foo = 'bar';
// console.log(foo);
// setTimeout(() => {foo = 'baz';console.log(foo);},500);*/

// export var m =1;
// var a =1;
// export {a};
// function f(){}
// export{f};
// export function f(){}; 
// import {} from "./";

// export const A = 1 ;
// export const B = 3 ;
// export const C = 4 ;

// import * as constants from './';
// console.log(constants.A);
// console.log(constants.B);

// import { A,B } from './';
// console.log(A);
// console.log(B)；

// export let c = new C();

// import baz from './a';

// import {default as baz} from "./a";
// import * as baz from './a';

// module.exports = null;
// import foo from './b'; //foo = null
// import * as bar from './b'; 
// bar.default

// module.exports = function two(){
// 	return 2;
// }
// import foo from './c';
// foo();
// import * as bar from './c';
// bar.default();

// let foo = {bar:"my-default"};
// export default foo;
// foo = null

// const es_namespace = await import("./es");
// //es_namespace = {get default(){}}
// es_namespace.default;

// import {bar} from './b';
// console.log('a.mjs');
// console.log(bar());
// function foo(){return 'foo'};
// export {foo};

// import {foo} from './a';
// console.log('b.mjs');
// console.log(foo());
// function bar(){return 'bar'};
// export {bar};

// //b.mjs 'foo' a.mjs 'bar'


export function sum(x, y) {
	return x + y;
}
export let pi = 3.141593;