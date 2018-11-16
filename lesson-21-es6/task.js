'use strict';

const AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";
let storage = {};
let keyArticle = '';

function addStorage() {

        $.ajax(
          {
            url: AjaxHandlerScript,
            type: 'POST',
            data: {f: 'READ', n: 'Radkevich_ENCYCL'},
            cache: false,
            success: writeReady,
            error: ErrorHandler
          }
        );
}

function writeReady(ResultH) {
    storage = JSON.parse(ResultH.result);
}

function ErrorHandler (jqXHR, StatusStr, ErrorStr) {
   alert(StatusStr + ' ' + ErrorStr);
}

window.onhashchange = renderNewState;

function renderNewState() {
    const hash = window.location.hash;
    let state = decodeURIComponent(hash.substr(1));

    if (state === '') {
        state = {page: 'first'};
    } else {
        state = JSON.parse(state);
    }

    let page = '';

    switch(state.page) {

        case 'first':
            page +=`<h1>Энциклопедия</h1>
            <a class='center' onclick='switchToSecond()'>список статей здесь</a>`;
            break;

        case 'second':
        page +=`<h1>Оглавление</h1>`;
        page +=`<div id=col>`;
        page += addPage();
        page +=`</div>`;
            break;

        case `third ${keyArticle}`:
        page +=`<h1>Название статьи</h1>`;
        page += `<div id=articleList>`;
        page += addPageArticleList();
        page += `</div>`;
        page += `<div id=article>`;
        page += addPageArticle();
        page += `</div>`;
            break;
    }

    document.getElementById('page').innerHTML = page;
}

function switchToState(state) {
    location.hash = encodeURIComponent(JSON.stringify(state));
}

function switchToFirst() {
    switchToState({page: 'first'});
}
function switchToSecond() {
    switchToState({page: 'second'});
}
function switchToThird() {

    keyArticle = event.target.textContent;
    switchToState({page: `third ${keyArticle}`});
}

function addPage() {
    let storageSort = {};
    let pageSt = '';

    Object.keys(storage).sort().forEach(function(key) {
        storageSort[key] = storage[key];
      });

    let firstLetter = 'а';

    for (let key in storageSort) {

        if (key[0] !== firstLetter) {
            firstLetter = key[0];
            pageSt +=`<p id="firstLetter">${firstLetter}</p>`;
        }
        pageSt += `<a onclick='switchToThird()'>${key}</a><br>`;
    }
    return pageSt;
}

function addPageArticleList() {
    let storageSort = {};
    let pageSt = '';

    Object.keys(storage).sort().forEach(function(key) {
        storageSort[key] = storage[key];
      });

    for (let key in storageSort) {
        pageSt += `<a onclick='switchToThird()'>${key}</a><br>`;
    }
    return pageSt;
}

function addPageArticle() {
    let pageSt = '';
    pageSt += `<p>${storage[keyArticle]}</p>`;
    return pageSt;
}

addStorage();
renderNewState();
