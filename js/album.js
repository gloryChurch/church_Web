const albumListContainer = document.getElementById('album-list');
const albumViewContainer = document.querySelector('.album-view');
const mainContainer = document.querySelector('.main');

function displayAlbumList(albums) {
    albums.sort((a, b) => b.id - a.id);
    albums.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.classList.add('album');

        albumElement.addEventListener('click', function () {
            let currentURL = window.location.href;
            let newURL = currentURL + '?album=' + album.id;
            window.location.href = newURL;

            // Toggle the visibility of the main container and the album view container
            mainContainer.style.display = 'none';
            albumViewContainer.style.display = 'flex';
        });

        const imgElement = document.createElement('img');
        imgElement.src = album.img1;
        imgElement.alt = album.title;

        const albumContentElement = document.createElement('div');
        albumContentElement.classList.add('album-content');

        const titleElement = document.createElement('h2');
        titleElement.innerText = album.title;

        const contentElement = document.createElement('p');
        contentElement.innerText = album.album_;

        albumContentElement.appendChild(titleElement);
        albumContentElement.appendChild(contentElement);

        albumElement.appendChild(imgElement);
        albumElement.appendChild(albumContentElement);

        albumListContainer.appendChild(albumElement);
    });
}

displayAlbumList(album);

let url_href = window.location.href;
const albumId = new URL(url_href).searchParams.get("album");

let albumIdNumber = parseInt(albumId);

let albumData;
for (let i of album) {
    if (albumIdNumber === i.id) {
        albumData = i;
        mainContainer.style.display = 'none';
        albumViewContainer.style.display = 'flex';
        break;
    }
}
console.log(albumData);

let title = albumData.title;
let date = albumData.date;
let txt = albumData.txt;
console.log(title, date);

const albumTitleContainer = document.getElementById('album-title');
const albumSubContainer = document.getElementById('album-sub'); // Corrected to getElementById

let html = ``;

for (let i = 1; albumData[`img${i}`]; i++) {
    html += `<img class="link" src=` + albumData[`img${i}`] + `></img>`; // Removed unnecessary concatenation
}

albumSubContainer.innerHTML = html; // Set innerHTML instead of using +=

const albumTitleElement = document.createElement('h2');
albumTitleElement.innerText = title;

const albumH3Element = document.createElement('h3');
albumH3Element.innerText = txt;

const albumPElement = document.createElement('p');
albumPElement.innerText = date;

albumTitleContainer.appendChild(albumTitleElement);
albumTitleContainer.innerHTML += `<div class="line"></div>`;
albumTitleContainer.appendChild(albumPElement);
albumTitleContainer.appendChild(albumH3Element);