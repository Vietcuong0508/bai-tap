var article1 = {
    'title': 'Garen',
    'thumbnail': 'garen.png',
    'description': 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
};

var article2 = {
    'title': 'Jarvan IV',
    'thumbnail': 'jarvan-VI.png',
    'description': 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
};

var article3 = {
    'title': 'Lee Sin',
    'thumbnail': 'leesin.png',
    'description': 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
};
var listCharacter = new Array();
listCharacter.push(article1);
listCharacter.push(article2);
listCharacter.push(article3);
var mainContent = document.getElementById('mainContent');
var contentOfDiv = '';
for (let i = 0; i < listCharacter.length; i++) {
    const element = listCharacter[i];
    contentOfDiv += `
    <article>
        <div class="article-title">
            <a href="#">${element.title}</a>
        </div>
        <div class="article-img">
            <img src="${element.thumbnail}" alt="">
        </div>
        <div class="article-content">
            ${element.description}
        </div>
    </article>
    `;
}
mainContent.innerHTML = contentOfDiv;