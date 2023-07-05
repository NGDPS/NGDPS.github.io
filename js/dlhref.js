const dllist = document.querySelectorAll('.dl-item');

for(let i = 0; i < dllist.length; i++) {
    dllist[i].onclick = () => {
        const id = dllist[i].querySelector('.none').innerText;
        localStorage.setItem('id', id);
        window.location.href = './lvl.html';
    }
}