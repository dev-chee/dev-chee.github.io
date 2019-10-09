let btn = document.querySelector('button');
let heading = document.querySelector('h1');

function setUserName() {
    let name = prompt('请输入你的名字。');
    if (!name || name === null) {
        setUserName();
    } else {
        localStorage.setItem('name', name);
        heading.innerHTML = 'Mozilla 酷毙了，' + name;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    heading.textContent = 'Mozilla 酷毙了，' + storedName;
}

btn.onclick = setUserName;

