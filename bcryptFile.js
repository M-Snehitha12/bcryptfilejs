// import bcrypt from 'bcrypt.js';
const bcrypt=require('bcrypt');
let user={
    name:'JB Tech Solutions',
    email:'jbtechsolutions@gmail.com',
    password:'jbtechsolutions@123'
};
let salt=bcrypt.getSaltSync(10);
let hashedpassword=bcrypt.hashSync(user,password,salt);
console.log(hashedpassword);
let UpdatedUser={
    ...user,
    password:hashedpassword
};
if(bcrypt.compareSync('jbtechsolutions@123',hashedpassword)){
    console.log('password is MATCHED,you are logged');
}
else{
    console.log('enter correct passowrd');
}