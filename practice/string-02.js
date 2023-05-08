//str: easy frontend easy
/*
    return statistic{
        easy : 2,
        frontend: 1,
    };
*/

// function statisticWords(str) {
//   if (str === '') return {};
//   const statistic = {};
//   str
//     .split(' ')
//     .filter((x) => x !== '')
//     .forEach((x) => {
//       if (statistic[x]) statistic[x] += 1;
//       else statistic[x] = 1;
//     });
//   return statistic;
// }

export function statisticWords(str) {
  if (str === '') return {};
  return str
    .split(' ')
    .filter((x) => x !== '')
    .reduce((statistic, word) => {
      //   if (statistic[word]) statistic[word] += 1;
      //   else statistic[word] = 1;
      statistic[word] = statistic[word] !== undefined ? statistic[word] + 1 : 1;
      return statistic;
    }, {});
}

console.log(statisticWords('easy frontend easy'));
