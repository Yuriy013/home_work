// створити функцію яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл) та виводить його через document.write

function foobar(text,counter) {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)

}
foobar("okten", 100);
// <ul></ul> неможуть лежати циклі тобто на початку і за межами.