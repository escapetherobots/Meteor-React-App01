import someDefault, {greetUser, name } from './../imports/utils';

console.log('Log:: meteor server side:');
console.log(greetUser(name));
console.log('some default: ', someDefault);
