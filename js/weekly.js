
const listTable = document.querySelector('.list-table');
const targetElement = document.querySelector('.weekly-view');
const weeklycontainerElement = document.querySelector('.weekly-container');

function populateListTable() {
    
    // 공지사항 배열을 순회하면서 처리
    weekly.forEach(item => {
        // 각 공지사항 아이템을 위한 새로운 div 엘리먼트 생성
        const listItem = document.createElement('div');
        listItem.classList.add('list');


        listItem.addEventListener('click', function () {
            let currentURL = window.location.href;
            let newURL = currentURL + '?weekly=' + item.id;
            window.location.href = newURL;

            // Toggle the visibility of the main container and the sermon view container
        });

        // 리스트 아이템에 내용 추가
        listItem.innerHTML = `
            <div class="li number">${item.id}</div>
            <div class="li title">${item.title}</div>
            <div class="li time">${item.date}</div>
        `;

        // 리스트 아이템을 리스트 테이블에 추가
        listTable.appendChild(listItem);
    });
}

// 페이지 로드 시 list-table 섹션을 채우는 함수 호출
populateListTable();

// 각 공지사항에 대한 HTML을 동적으로 생성하는 함수
function createweeklyHTML(weeklyItem) {
    let html = ``;

    // 각 txt에 대한 HTML을 동적으로 생성
    for (let i = 1; weeklyItem[`tit${i}`]; i++) {
        html += `<div>`;
        let test = weeklyItem[`img${i}`];
        console.log(test);


        html += `<div class="img"><img src=` + test + `></img> </div>`;

            html += `<div class="sub1" id="date">
                        <p class="title">일자</p>
                        <p class="sub">`+ weeklyItem[`date`] +`</p>
                    </div>`

        targetElement.classList.remove('hidden');
        listTable.classList.add('hidden');

        const h4Container = document.querySelector('h4');
        h4Container.innerHTML = weeklyItem.title;
        html += `</div>`;
    }

    return html;
}

// 현재 URL에서 weekly 값 가져오기
const urlParams = new URLSearchParams(window.location.search);
const weeklyId = urlParams.get('weekly');

// 공지사항이 표시될 컨테이너 요소를 가져옴
const weeklyContainer = document.querySelector('.sub-detail');

// 만약 URL에 weekly 값이 있고 해당 ID가 데이터에 존재하면 해당 ID의 공지사항 내용을 동적으로 생성하여 컨테이너에 추가
if (weeklyId) {
    const selectedweekly = weekly.find(item => item.id == weeklyId);
    if (selectedweekly) {
        const weeklyHTML = createweeklyHTML(selectedweekly);

        weeklyContainer.innerHTML = weeklyHTML;
    } else {
        // ID에 해당하는 공지사항이 없을 경우에 대한 처리 (예: 에러 메시지 표시 등)
        weeklyContainer.innerHTML = '<p>해당하는 공지사항이 없습니다.</p>';
    }
} else {
    // weekly 값이 없을 경우에 대한 처리 (예: 기본 화면 표시 등)
    weeklyContainer.innerHTML = '<p>공지사항을 선택해주세요.</p>';
}

