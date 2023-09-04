console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
	function fetchWithError () {
		const errorMessage = "Помилка при з'єднанні з сервером";
		return Promise.reject(errorMessage)
	}
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
	fetchWithError()
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
		.then ((data) => {
			console.log(data);
		})
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
		.catch ((err) => {
			console.error(err)
		})
}

// Викликаємо функцію task10
task9();
