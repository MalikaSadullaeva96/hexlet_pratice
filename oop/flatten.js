// Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.
// Для решения задачи нельзя использовать готовые методы для выравнивания массивов.

// const list = [1, 2, [3, 5], [[4, 3], 2]];
// flatten(list); // [1, 2, 3, 5, 4, 3, 2]




const flatten = (tree) => tree.reduce ((acc,val,index) =>{
    console.log('---------->'+val);
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
},[]);

const array = flatten([1, 2, [3, 5], [[4, 3], 2]]);
console.log(array);