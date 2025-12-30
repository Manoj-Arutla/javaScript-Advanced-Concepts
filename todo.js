let title = document.getElementById('taskName');
let desc = document.getElementById('description');
let listItem = document.querySelector('.listItem')

document.getElementById('subBtn').addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    let titleCon = title.value;
    let descCon = desc.value;
    localStorage.setItem("todos", JSON.stringify([titleCon,descCon]));
    listItem.innerHTML = `
    <h1>${titleCon}</h1>
    <p>${descCon}</p>
    `
    title.value = "";
    desc.value = "";
})

document.getElementById('delBtn').addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("todos");
    listItem.innerHTML = "";

})