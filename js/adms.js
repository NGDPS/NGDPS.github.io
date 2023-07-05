class Admins {
    addAdmin(username, role, discord, id) {
        this.admsID++;
        const list = document.querySelector('#adms-list');
        const li = document.createElement('li');
        list.appendChild(li);

        const img = document.createElement('img');
        img.src = './img/adms/' + id + '.png';
        img.alt = '';
        li.appendChild(img);

        const itemText = document.createElement('div');
        itemText.className = 'adms-text';
        li.appendChild(itemText);

        const header = document.createElement('h2');
        const headerText = document.createTextNode(`${username} - ${role}`);
        header.appendChild(headerText);
        itemText.appendChild(header);

        const author = document.createElement('p');
        const authorText = document.createTextNode(`Contact: ${discord}`);
        author.appendChild(authorText);
        itemText.appendChild(author);
    }
}