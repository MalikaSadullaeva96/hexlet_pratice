//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход путь (абсолютный или относительный) 
//и возвращает информацию о файлах и директориях, расположенных по этому пути. Данные возвращаются в виде массива объектов, 
//где каждый элемент — это информация о конкретном файле: его путь и описание доступов (stat.mode). Объекты в массиве должны быть 
//отсортированы по имени файла.
const { retry } = require('async');
var fs = require('fs/promises');
var _ = require('lodash');
var path = require('path');

const ls = async (relPath) => {
   const paths = path.resolve(relPath); //convert from relative path to absolute
   console.log(paths);
   const promiseStat = await fs.stat(paths); 
   if(promiseStat.isFile()){
     return ([{filepath: paths, mode: promiseStat.mode}]);
   }
   const promiseRead = await fs.readdir(paths, 'utf-8'); //returr file and direc in path dir
   const pathJoin = promiseRead.map((val) => path.join(paths,val)); 
   const statOfFileDir = await Promise.all(pathJoin.map(val => fs.stat(val))); //fs.stat is promise
   const modeOfDir = statOfFileDir.map((val) => val.mode);
   const answer = [];
   for (let i = 0; i < pathJoin.length; i++){
    answer.push({filepath: pathJoin[i], mode: modeOfDir[i]});
   }
   return answer;
}
ls('//..//Users//malika//Desktop//hexlet_practise//')