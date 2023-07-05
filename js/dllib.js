class Main {
    dlIter = 0;

    setDemon(id, lvlname, author) {
        this.dlIter++;
        const dllist = document.getElementById('dl-list');
        const item = document.createElement('li');
        item.className = 'dl-item';
        dllist.appendChild(item);

        const img = document.createElement('img');
        img.src = `./img/lvls/${id}.png`;
        img.alt = '';
        item.appendChild(img);

        const itemText = document.createElement('div');
        itemText.className = 'dl-item-text';
        item.appendChild(itemText);

        const h2 = document.createElement('h2');
        const oneupstr = '#' + this.dlIter.toString() + ' ';
        const zero = document.createElement('text');
        const zeroText = document.createTextNode('-');
        zero.className = 'tire';
        zero.appendChild(zeroText);
        const twoupstr = ' ' + lvlname;
        const firstUpStrNodeText = document.createTextNode(oneupstr);
        const secondUpStrNodeText = document.createTextNode(twoupstr);
        h2.appendChild(firstUpStrNodeText);
        h2.appendChild(zero);
        h2.appendChild(secondUpStrNodeText);
        itemText.appendChild(h2);

        const p = document.createElement('p');
        const pText = 'By ' + author;
        const pTextNode = document.createTextNode(pText);
        p.appendChild(pTextNode);
        itemText.appendChild(p);

        const none = document.createElement('p');
        none.className = 'none';
        const noneText = document.createTextNode(id.toString());
        none.appendChild(noneText);
        itemText.appendChild(none);
    }

    setModalInfo(id, lvlname, author, verifer, length, rate, url) {
        const lostID = localStorage.getItem('id');
        if (lostID != id) return;

        const main = document.querySelector('.lvl-infrmation');
        const lvlname1 = document.createElement('h2');
        lvlname1.className = 'lvlname';
        const lvlnameNode = document.createTextNode(lvlname);
        lvlname1.appendChild(lvlnameNode);
        main.appendChild(lvlname1);

        const authorname = document.createElement('p');
        authorname.className = 'lvl-creature';
        const authorText = 'Verified by ' + author + '. Created by ' + verifer; 
        const authorTextNode = document.createTextNode(authorText);
        authorname.appendChild(authorTextNode);
        main.appendChild(authorname);

        const iframe = document.createElement('iframe');
        iframe.className = 'lvl-video';
        iframe.width = 560;
        iframe.height = 315;
        iframe.src = 'https://www.youtube.com/embed/' + url;
        iframe.title = 'YouTube video player';
        iframe.frameBorder = 0;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        main.appendChild(iframe);

        const information = document.createElement('div');
        information.className = 'full-info';
        main.appendChild(information);

        information.appendChild(this.infoItem('Level ID:', id));
        information.appendChild(this.infoItem('Level Length:', length));
        information.appendChild(this.infoItem('Rate:', rate));
    }

    infoItem(header, val) {
        const block = document.createElement('div');
        block.className = 'info-item';

        const hrspan = document.createElement('span');
        block.appendChild(hrspan);

        const lvlInfoValue = document.createElement('div');
        lvlInfoValue.className = 'level-info-value';
        const lvlInfoValueNode = document.createTextNode(header);
        lvlInfoValue.appendChild(lvlInfoValueNode);
        block.appendChild(lvlInfoValue);

        const hrspan2 = document.createElement('span');
        block.appendChild(hrspan2);

        const value = document.createElement('div');
        const valueNode = document.createTextNode(val);
        value.appendChild(valueNode);
        block.appendChild(value);

        return block;
    }

    setRecord(id, username, record, url, urltype) {
        const lostID = localStorage.getItem('id');
        if (lostID != id) return;

        const table = document.querySelector('table');
        const tr = document.createElement('tr');
        table.appendChild(tr);

        const td1 = document.createElement('td');
        const nodeText1 = document.createTextNode(username);
        td1.appendChild(nodeText1);
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        const nodeText2 = document.createTextNode(record);
        td2.appendChild(nodeText2);
        tr.appendChild(td2);

        const td3 = document.createElement('td');

        const text3 = document.createElement('a');
        text3.href = url;
        const nodeText3 = document.createTextNode(urltype);
        text3.appendChild(nodeText3);
        td3.appendChild(text3);
        tr.appendChild(td3);
    }
}