class Rules {
    ruleIter1 = 0;
    ruleIter2 = 0;
    ruleIter3 = 0;

    addRules(rule, number) {
        let li;
        let i = 0;
        switch(number) {
            case 1:
                i = ++this.ruleIter1;
                li = document.getElementById('rules1');
                break;
            case 2:
                i = ++this.ruleIter2;
                li = document.getElementById('rules2');
                break;
            case 3:
                i = ++this.ruleIter3;
                li = document.getElementById('rules3');
                break;
            default:
                console.error('Number is undefined!');
                break;
        }

        const newRule = document.createElement('p');
        const text = i + '. ' + rule;
        const textNode = document.createTextNode(text);
        newRule.appendChild(textNode);
        li.appendChild(newRule);
    }
}