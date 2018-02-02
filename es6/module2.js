/*import {m1,n1,m2} from 'module1';
console.log(m1);*/
import {
	sum,
	pi
} from "./module1";
console.log(sum(2, 3), pi);
let arr = [];
for (var i = 0; i < 10; i++) {
	arr[i] = () => console.log(i);
}
arr[6]();