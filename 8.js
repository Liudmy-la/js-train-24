console.log("Завдання: 8 ==============================");

function task8() {
  // Створюємо функцію fetchFakeData, яка симулює запит до сервера та повертає "дані" через Promise.resolve().
	function fetchFakeData() {
	// Створюємо fakeData константу з данними { name: "John",age: 30}
		const fakeData = { name: "John", age: 30};
		return Promise.resolve(fakeData)
	}
  // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
  // Викликаємо функцію fetchFakeData
	fetchFakeData()
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
	.then ((data) => {
		console.log(data);
	})
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
	.catch ((err) => {
		console.error(err.message);
	})
}

// Викликаємо функцію task8
task8();
