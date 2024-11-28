/*
    HTML 마크업 이벤트 함수
        1. onclik : 지정한 마크업을 클릭했을때 JS코드
    
    <마크업 onclick="JS함수명()">
*/

// [1] 'func1' 함수 정의
function func1() {
    console.log('func1 execute')
}


let 이름명단 = [] // --> 전역변수
// [2] '등록함수' 정의 : [등록] 버튼 클릭시 input에 입력된 값을 배열에 저장하는 함수
function 등록함수() {
    // - DOM객체( document ) : HTML 을 조작 가능한 객체    
    // document.querySelector('#id명')
    // document.querySelector('마크업명')
    // document.querySelector('.클래스명 >')

    // 1. html input 마크업에 입력된 데이터를 js로 가져오기
    let input = document.querySelector('.nameInput')
    
    // 2. input(객체) 에서 입력된 value 호출하기
    let data = input.value;
    console.log(data)
    
    // 3. 'data' 변수의 값을 '이름명단' 전역변수 배열로 대입
    이름명단.push(data)

    // 4. 배열에 push 이후에 출력(새로고침)을 한다.
    출력함수()
}
// ---> 함수가 종료되면서 입력받은 'data' 변수는 사라진다. (지역변수)

// [3] '출력함수' 정의 : 배열(이름명단)의 변화가 있을때 화면
function 출력함수() {
    // - 배열순회 : 배열내 모든 요소들을 하나씩 호출
    let html = ''; // (1) 출력할 HTML 구성할 변수를 선언
    for (let index = 0; index < 이름명단.length; index++) {
        // console.log( 이름명단[index] )
        html += `<div> ${이름명단[index]} </div>` // 출력할 HTML 변수에 배열내 데이터를 누적한다.
    }
    // console.log(html)
    // (3) HTML 출력 , 특정한 구역의 출력 , inner : <시작마크업> inner </끝마크업>
    document.querySelector('.printBox').innerHTML += html

    console.log(document.querySelector('.printBox').innerHTML)
}