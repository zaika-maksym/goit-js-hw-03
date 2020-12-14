console.log('---Задание-№4');

const countTotalSalary = function(employees) {
  let total = 0;
  const values = Object.values(employees);

  for (const value of values) {
      total += value;
  }

  return total;
};

/*
* Вызовы функции для проверки работоспособности твоей реализации.
*/
console.log(countTotalSalary({})); // 0

console.log(
countTotalSalary({
  mango: 100, 
  poly: 150,
  alfred: 80,
}),
); // 330

console.log(
countTotalSalary({
  kiwi: 200,
  lux: 50,
  chelsy: 150,
}),
); // 400