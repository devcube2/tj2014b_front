// [2] 구구단 2~9단 만들기
// let outerHTML = "";
// for (let i = 2; i <= 9; i++) {
//     outerHTML += "<ul>"
//     for (let j = 1; j <= 9; j++) {
//         outerHTML += `<li>${i} * ${j} = ${i * j}</li>`
//     }
//     outerHTML += "</ul>"
// }
// document.write(outerHTML)

// [3] 별 모양 출력 하기 , 입력받은 줄 수 만큼
// 예] 5 입력 했을경우 아래와 같이 5줄의 별 모양 출력
/*
    *
    **
    ***
    ****
    *****
*/
for (let i = 1; i <= 5; i++) {        
    for (let j = 1; j <= i; j++) {
        document.write('*')
    }
    document.write("<br />")    
}