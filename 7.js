console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setInterval та проміси.
function task7() {
  // Створюємо новий проміс.
	new Promise ((res, rej) => {
		// Отримаємо поточну дату та час
		// Отримуємо секунди з поточної дати
		let seconds = (new Date()).getSeconds() 
		// Використовуємо функцію setInterval, щоб виконати функцію кожну секунду.
		// Виводимо в консоль повідомлення `Поточні секунди: ${seconds}`
		
		let clock = setInterval(() => {
			console.log(`Поточні секунди: ${seconds}`);

			if (seconds % 10 === 0) {
				// Якщо поточні секунди кратні 10, очищуємо інтервал та резолвимо проміс з рядком "Поточні секунди кратні 10!".
				clearInterval(clock)
				return res(`Поточні секунди кратні 10!`)
			}
			else if (seconds % 3 === 0) {
				// Якщо поточні секунди кратні 3, очищуємо інтервал та відхиляємо проміс з рядком "Поточні секунди кратні 3!".
				clearInterval(clock),
				rej(new Error(`Поточні секунди кратні 3!`))
			} 
			else {
				setTimeout(() => {clearInterval(clock)})
			}
		}
			, 1000)			
	}) 
  // Використовуємо then для обробки зарезолвленого проміса, та виводимо в консоль `Проміс зарезолвився з значенням: ${value}` .
	.then ((value) => {
		console.log(`Проміс зарезолвився зi значенням: ${value}`)
	})
  // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо в консоль `Проміс відхилився з помилкою: ${error}`.
	.catch((error) => {
		console.error(`Проміс відхилився з помилкою: ${error.message}`)
	})
  // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо в консоль "Проміс завершено".
	.finally (() => {
		console.log(`Проміс завершено`)
	})
}

// Викликаємо функцію task7
task7();

// let repeat = setInterval(() => {
// 	counter ++
// 	console.log(`Значення лічильника: ${counter}`);
// // Коли лічильник досягає 5, використовуємо clearInterval та викликаємо resolve, який повертає значення лічильника.
// 	if (counter === 5) {
// 		clearInterval(repeat);
// 		res(counter)
// 	}
// }, 1000)