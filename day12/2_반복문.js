/*
    - 반복문과 배열 관계
        1. 배열의 인덱스는 순차적인 순서가 존재한다.
            배열이란? 여러개 요소들을 순서대로 나열한 자료의 타입
            인덱스이란? 배열내 저장된 순서 번호
            let 배열변수 = [ '유재석' , '강호동' , '하하' ]
                index =         0         1         2
                length = 3
        2. 0 부터 마지막 인덱스 까지 1씩 증가
        3. 마지막 인덱스 구하는 방법 ? 배열변수.length - 1
        4. 배열 순회 , 배열내 모든 요소를 하나씩 호출 하는 작업
            for( let index = 0 ; index <= 배열변수.length - 1 ; index++ ) {
                배열변수[index]
            }
*/
// [1] 배열의 데이터
// let 과일상자 = [ '사과' , '포도' , '딸기' ]; // 3개의 문자열을 저장하는 배열 선언후 변수에 대입
// // - 배열내 모든 요소를 하나씩 출력하세요.
// for (let index = 0; index < 과일상자.length; index++) {
//     console.log(과일상자[index])
// }

// [2] 3개의 점수를 입력받아 정수배열에 모두 저장하시오.
let 점수배열 = []
let 점수1 = Number(prompt('점수를 입력하세요'))
let 점수2 = Number(prompt('점수를 입력하세요'))
let 점수3 = Number(prompt('점수를 입력하세요'))
점수배열.push(점수1)
점수배열.push(점수2)
점수배열.push(점수3)


// [3] 점수배열에 저장된 모든 요소 들을 <li> 마크업에 출력하시오
document.write("<ul>");
for (let index = 0; index < 점수배열.length; index++) {
    document.write(`<li>${점수배열[index]}</li>`);    
}
document.write("</ul>");