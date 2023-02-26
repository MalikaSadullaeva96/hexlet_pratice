//Реализуйте таймер в виде промиса. Функция должна принимать на вход количество миллисекунд и возвращать промис.

let fs = require('fs');

const wait = (ms) => {
  return new Promise ((resolve, reject) => {      // resolve receives output of the function
    setTimeout(function(){
      resolve();
    },ms);
  });
}
wait(5000).then(() => console.log('time is over!'));
