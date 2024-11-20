//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write

function foobar(arrayofPrimitives) {
    document.write(`<ul>`);
    for (const item of arrayofPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}foobar([123,56568,266,41,"okten",true])

//масив примітивних елементів
//в foobar незабуваєм ставити душки масиву