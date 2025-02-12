"use strict";
// const user = {
//   firstName: "Amazing",
//   lastName: "Sufiyan",
//   role: "Software",
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    age: 1,
    name: "234r5"
};
function login(userData) {
    return 0;
}
const userId = 2;
const transaction1 = {
    payeeAccountNumber: 1233,
    payerAccountNumber: 344
};
const bankAccount = {
    accountHolder: "slkdf",
    accountNumber: 123,
    balance: 234,
    isActive: true,
    transaction: [transaction1]
};
const book = {
    name: "slkd",
    price: 123,
    fileSize: 23,
    format: 'pdf',
    duration: 32
};
// Narrowing
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4]));
// Generics
function logAnything(arg) {
    console.log(arg);
    return arg;
}
logAnything([1, 3, 4, 5]);
function getOldest(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [
    { age: 23 },
    { age: 22 },
    { age: 21 },
    { age: 34 },
    { age: 56 },
];
const gaet = getOldest(people).age;
const player = [
    { name: "sdf", age: 232 },
    { name: "aslkfd", age: 23 },
    { name: "oweir", age: 43 },
    { name: "xmcv", age: 123 },
];
const p2 = getOldest(player);
console.log(p2);
const fetchPostData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://example.com${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    // const posts = await fetchPostData('/posts');
    const posts = yield fetchPostData('/posts');
    posts[0].description;
}));
function login2(credentials) {
    console.log(credentials);
    return credentials;
}
const newUser = {
    username: 'aloo',
    password: '232424',
    isAdmin: true
};
login2(newUser); // if two object have same methods then it also accepts them
const auth = {
    username: 'coder',
    password: 'secret',
    login3(username, password) {
        return true;
    }
};
