
const sermonListContainer = document.getElementById('sermon-list');
const sermonViewContainer = document.querySelector('.sermon-view');
const mainContainer = document.querySelector('.main');

function displaySermonList(sermons) {
    sermons.sort((a, b) => b.id - a.id);
    sermons.forEach(sermon => {
        const sermonElement = document.createElement('div');
        sermonElement.classList.add('sermon');

        sermonElement.addEventListener('click', function () {
            let currentURL = window.location.href;
            let newURL = currentURL + '?sermon=' + sermon.id;
            window.location.href = newURL;

            // Toggle the visibility of the main container and the sermon view container
        });


        const imgElement = document.createElement('img');
        imgElement.src = sermon.image;
        imgElement.alt = sermon.title;

        const sermonContentElement = document.createElement('div');
        sermonContentElement.classList.add('sermon-content');

        const titleElement = document.createElement('h2');
        titleElement.innerText = sermon.title;

        const contentElement = document.createElement('p');
        contentElement.innerText = sermon.sermon_;

        sermonContentElement.appendChild(titleElement);
        sermonContentElement.appendChild(contentElement);

        sermonElement.appendChild(imgElement);
        sermonElement.appendChild(sermonContentElement);

        sermonListContainer.appendChild(sermonElement);
    });
}

// 성경 말씀 목록을 표시
displaySermonList(sermon);


let url_href = window.location.href; // 브라우저 창에 있는 주소
const sermonId = new URL(url_href).searchParams.get("sermon");

// console.log(sermonId);
let sermonIdNumber = parseInt(sermonId);

let sermonData;
for (let i of sermon) {
    if (sermonIdNumber === i.id) {
        sermonData = i; // id가 같으면, 해당 항목 전체를 sermonData에 넣습니다.
        mainContainer.style.display = 'none';
        sermonViewContainer.style.display = 'flex';
        break;
    }
}
console.log(sermonData);


let title = sermonData.title;

let date = sermonData.date;
let zoom_link = sermonData.Zoom_link;
let preacher = sermonData.preacher;
let image = sermonData.image;
let sermon_ = sermonData.sermon_;
console.log(title, date, zoom_link, preacher, sermon_);


const sermonTitleContainer = document.getElementById('sermon-title');


const sermontitleElement = document.createElement('h2');
sermontitleElement.innerText = title;

const sermonPElement = document.createElement('p');
sermonPElement.innerText = date;

sermonTitleContainer.appendChild(sermontitleElement);
sermonTitleContainer.appendChild(sermonPElement);


const linkIframe = document.getElementsByClassName("sub")[0];
linkIframe.href = zoom_link;

const titleDiv = document.getElementsByClassName("sub")[1];   //  
titleDiv.innerHTML = preacher;

const titleDiv1 = document.getElementsByClassName("sub")[2];
titleDiv1.innerHTML = sermon_;

const imageDiv = document.getElementsByClassName("image")[0];
imageDiv.src = image;