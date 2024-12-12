// 구글링해서 퍼온 함수...
function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function 삭제함수(index) { // 매개변수 , 삭제할 인덱스 번호
    let board = JSON.parse(localStorage.getItem('board'))
    board.splice(index, 1) // 내가 선택한 게시물의 인덱스를 삭제
    localStorage.removeItem('board') // localStorage 값 교체하기위해 삭제..
    localStorage.setItem('board', JSON.stringify(board))
    alert('삭제하였습니다.')
    history.back() // 바로 전 페이지로 이동... (목록페이지로 가게된다.)
}

const board = JSON.parse(localStorage.getItem('board'))

const index = getParameter('index') // 목록 페이지에서 GET 방식으로 넘어온 인자값(index)을 읽어온다.
const article = board[index]

let info = article.split(',')

document.querySelector('.titleBox').innerHTML = info[0] // 제목 데이터를 .titleBox 마크업 사이에 대입
document.querySelector('.contentBox').innerHTML = info[1] // 내용 데이터를 .contentBox 마크업 사이에 대입
document.querySelector('.dateBox').innerHTML = info[2] // 작성일 데이터를 .dateBox 마크업 사이에 대입
document.querySelector('.viewBox').innerHTML = info[3] // 조회수 데이터를 .viewBox 마크업 사이에 대입
document.querySelector('.btnBox').innerHTML = `<button onclick="삭제함수(${index})" type="button">삭제</button>`
