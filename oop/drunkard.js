export default class Drunkard {
    run(card1, card2) {
      let arr1 = card1;
      let arr2 = card2;
      console.log('------------>ARR1 '+card1);
      console.log('----------->ARR2 '+card2);
      let arr3 = [];
      let i = 0;
      while (i < 100) {
        if (arr1[0] > arr2[0] && arr1.length !== 0 && arr2.length !== 0) {
          arr3[0] = arr1[0];
          arr1.shift();
          arr1.push(arr2[0]);
          arr1.push(arr3[0]);
          arr2.shift();
        }
        else if (arr2[0] > arr1[0] && arr1.length !== 0 && arr2.length !== 0) {
          arr3[0] = arr1[0];
          arr2.shift();
          arr2.push(arr1[0]);
          arr2.push(arr3[0]);
          arr1.shift();
        }
        else if (arr1[0] === arr2[0]) {
          if (arr1.length === 1 && arr2.length === 1) {
            return "Botva!";
          }
          arr1.shift();
          arr2.shift();
        }
        else if (arr1.length === 0) {
          return ('Second player. ' + 'Round: ' + (i));
        }
        else if (arr2.length === 0) {
          return ('First player. ' + 'Round: ' + (i));
        }
        else if (arr1.length === 0 && arr2.length === 0) {
          return "Botva!";
        }
        i += 1;
      }
      return 'Botva!';
    }
  }