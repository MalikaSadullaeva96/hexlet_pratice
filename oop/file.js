//Реализуйте и экспортируйте асинхронную функцию exchange(), которая обменивает содержимое двух файлов.

//let fs = require('fs');
var fs = require('fs/promises');

const exchange = async (path1, path2) => {
    const promise1 = fs.readFile(path1, 'utf-8');
    const promise2 = fs.readFile(path2, 'utf-8');

    //wait to async reading finish
    const [data1 , data2] = await Promise.all([promise1, promise2]);
    await fs.writeFile(path1, `${data2}`);
    await fs.writeFile(path2, `${data1}`);
}
exchange('//Users//malika//Desktop//hexlet_practise//oop//test1','//Users//malika//Desktop//hexlet_practise//oop//test2')