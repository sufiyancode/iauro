// const user = {
//   firstName: "Amazing",
//   lastName: "Sufiyan",
//   role: "Software",
// };

// console.log(user.firstName);


// type alias

type User = {
  name: string;
  age: number;
  address?: string;
}

const user: User ={
  age:1, 
  name:"234r5"
}


function login(userData: User): number {
  return 0;
}

type ID = number | string;

const userId : ID = 2;


// Interface

interface Transaction {
  payeeAccountNumber: number;
  payerAccountNumber : number;
}


interface  BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transaction: Transaction[]
}


const transaction1 : Transaction = {
  payeeAccountNumber: 1233,
  payerAccountNumber: 344
}
const bankAccount: BankAccount = {
  accountHolder :"slkdf",
  accountNumber:123,
  balance:234,
  isActive: true,
  transaction: [transaction1]

}


interface Book {
  name: string;
  price : number
}


interface Ebook extends Book {
  fileSize : number;
  format: string
}


interface AudioBook extends Ebook{
  duration: number;
}

const book : AudioBook ={
  name:"slkd", 
  price:123,
  fileSize:23,
  format: 'pdf', 
  duration:32
}



// Unions 

type EId = number | string;


// Narrowing
function printId(id: EId){
  if(typeof id === 'string')
  {

    console.log(id.toUpperCase())
  }else{
    console.log(id);
    
  }
}


function getFirstThree(x: string | number[]){
  return x.slice(0,3)
}

console.log(getFirstThree([1, 2, 3,4]));


// Generics


function logAnything<T>(arg: T): T {
  console.log(arg);
  return arg;
  
}

logAnything([1, 3, 4, 5])



interface HasAge {
  age: number;
}


function getOldest<T extends HasAge>(people: T[] ): T{

  return people.sort((a, b ) => b.age - a.age)[0];

}



const people: HasAge[] = [
  {age:23},
  {age:22},
  {age:21},
  {age:34},
  {age:56},

]

const gaet: number = getOldest(people).age


interface Player{
  name: string,
  age: number
}
const player: Player[] = [
  {name: "sdf", age:  232},
  {name: "aslkfd", age:  23},
  {name: "oweir", age:  43},
  {name: "xmcv", age:  123},
]

const p2 : Player = getOldest(player)
console.log(p2);



//##################################################################################


interface IPost {
  title: string,
  id: number;
  description: string
}

// const fetchPostData =async (path: string): Promise<IPost[]> => {
//   const response = await fetch(`https://example.com${path}`)

//   return response.json()
// }
interface IUser {
  name: string,
  age: number;
  id: number
}

const fetchPostData =async <ResultType> (path: string): Promise<ResultType> => {
  const response = await fetch(`https://example.com${path}`)

  return response.json()
}

( async() =>{
  // const posts = await fetchPostData('/posts');
  const posts = await fetchPostData<IPost[]>('/posts');
   posts[0].description;
} )


// Structural Typing or Duck Typing


interface ICredentials{
  username: string;
  password: string
}


function login2(credentials: ICredentials){
    console.log(credentials);
    return credentials;
    
}

const newUser = {
  username: 'aloo',
  password: '232424',
  isAdmin: true
}

login2(newUser) // if two object have same methods then it also accepts them


// 

interface IAuth {
  username: string;
  password:string;
  login3(username: string, password: string): boolean;
}
const auth: IAuth = {
  username:'coder',
  password:'secret',
  login3(username, password){
    return true
  }
}


