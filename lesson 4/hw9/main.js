//створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function foobar(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)

    }
    
}
foobar([
    {id: 1, name: "kolya", age:5},
    {id: 1, name: "kolya", age:5},
    {id: 1, name: "kolya", age:5},
    {id: 1, name: "kolya", age:5},
]);
