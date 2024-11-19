//створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function foobar(text) {
    let p = `<p>${text}</p>`
    document.write(p)

}
foobar("okten")