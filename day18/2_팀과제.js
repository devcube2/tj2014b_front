/*
let 도서번호 = 3
let 도서목록 = [
    { 도서번호: 1, 도서명: 양들의침묵, 저자: 앤소니홉킨스, 출판사: 인사이트 },
    { 도서번호: 2, 도서명: 무기여잘있거라, 저자: 어니스트헤밍웨이, 출판사: 길벗 }
]

let 재고번호 = 6
      재고 변화 상황 : 입고 , 출고 , 판매
let 재고목록 = [    
    { 재고번호: 1, 도서번호: 1, 변화량 : 10 ,  단가: 10000, 상태 : 입고  ,  날짜: 20241219 },
    { 재고번호: 2, 도서번호: 1, 변화량 : -5 , 단가: 10000, 상태 : 출고 , 날짜: 20241220 },
    { 재고번호: 3, 도서번호: 1, 변화량 : -3 , 단가: 10000,상태 : 판매, 날짜: 20241221 }, X
    { 재고번호: 4, 도서번호: 2, 변화량 : 12, 날짜: 20230505 }, O
    { 재고번호: 5, 도서번호: 2, 변화량 : -6 , 날짜: 20230505 } O
]
*/
let bookNum = 3
let bookList = [
    { bookNum: 1, name: "양들의침묵", author: "앤소니홉킨스", pub: "인사이트" },
    { bookNum: 2, name: "무기여잘있거라", author: "어니스트헤밍웨이", pub: "길벗" }
]
function 도서등록() {
    let name = document.querySelector('.name').value;
    let author = document.querySelector('.author').value;
    let pub = document.querySelector('.pub').value;
    let info = {
        bookNum: bookNum,
        name: name,
        author: author,
        pub: pub
    }
    bookList.push(info);
    console.log(bookList);
    bookNum++;
    도서출력();
}
도서출력();
function 도서출력() {
    let tbody = document.querySelector('.books');
    let html = ``;
    for (let i = 0; i <= bookList.length - 1; i++) {
        let info = bookList[i];
        html += `<tr><td>${info.bookNum}</td> 
                    <td>${info.name}</td> 
                    <td>${info.author}</td> 
                    <td>${info.pub}</td> 
                    <td><button type="button" onclick = "도서수정(${info.bookNum})">수정</button> 
                    <button type="button" onclick = "도서삭제(${i})">삭제</button> 
                    <button type="button" onclick = "재고등록()">재고등록</button>
                </td>
            </tr>`;
    }
    tbody.innerHTML = html;
}

function 도서수정(index) {
    let findBook = null;
    for (let i = 0; i <= bookList.length - 1; i++) {
        let info = bookList[i];
        if (info.bookNum == index) {
            findBook = info;
            break;
        }
    }
    if (findBook == null) {
        alret('도서정보가 없습니다.');
        return;
    }
    let td = document.querySelector('.correction');
    let html = `<h3>도서정보수정</h3>
        <form>
            <h5>수정할 도서번호 : ${findBook.bookNum}</h5>
            책명 <input type="text" class="rename"/>
            저자 <input type="text" class="reauthor"/>
            출판사 <input type="text" class="repub"/>
            <button type="button" onclick = "도서수정등록(${findBook.bookNum})">수정</button>
        </form>`;
    td.innerHTML = html;
}
function 도서수정등록(click) {

    console.log(1);
    let rename = document.querySelector('.rename').value;
    let reauthor = document.querySelector('.reauthor').value;
    let repub = document.querySelector('.repub').value;
    let info3 = { // 처음에 info2라고 했다가 실행안됨/변수명 겹치기 X
        bookNum: click, // 도서번호는 바뀌면 안되므로 클릭한 번호 그대로
        name: rename,
        author: reauthor,
        pub: repub
    }
    console.log(2);
    let correction = null; // 찾을 도서 
    for (let i = 0; i <= bookList.length - 1; i++) {
        let info2 = bookList[i];
        if (info2.bookNum == click) {
            correction = info2;
            // 수정처리;
            bookList[i] = info3 // 수정할 재고를 찾았으면 입력받은 객체로 대입/수정
            console.log(bookList)
            break;
        }
    }
    if (correction == null) {
        alret('도서정보가 없습니다.');
        return;
    }
    도서출력();


}
function 도서삭제(index) {
    bookList.splice(index, 1)
    console.log(bookList)
    도서출력();
}