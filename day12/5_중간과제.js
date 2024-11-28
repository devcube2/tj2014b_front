/*
    [문제1] 아래 배열을 이용한 아래 출력 형식으로 구현하기
        1. 영화이름 목록 , 영화이름과 영화평점은 같은 인덱스 사용한다.
            - movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ]
        2. 영화 평점 목록 , 각 영화별 평점은 10점 만점
            - movieRating = [ 8 , 4 , 7 , 6 ]
        3. HTML 예시
            히든페이스    ☆☆☆☆☆☆☆☆★★
            위키드        ☆☆☆☆★★★★★★
            글래디에이터2  ☆☆☆☆☆☆☆★★★
            청설          ☆☆☆☆☆☆★★★★
    
    [문제2] 6개 시트/좌석 이 존재하는 좌석 상태 출석하시오.
        1. 좌석은 총 6개 , 빈좌석인지 예약석인지는 임의로 설정
        2. 아래와 같이 좌석을 2칸씩 3줄 출력한다.
        3. 빈좌석이면 blue 색상 표기 , 예약석이면 red 색상 표기 하시오.
        4. HTML 예시
        빈좌석 예약석
        예약석 빈좌석
        예약석 빈좌석
*/

// 문제1
document.write('[ 문제1 ]<br/>')
let movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ]
let movieRating = [ 8 , 4 , 7 , 6 ]
for (let i = 0; i < movieNames.length; i++) {
    let star = "";
    for (let j = 0; j < movieRating[i]; j++) {
        star += "☆"
    }
    for (let j = 0; j < 10 - movieRating[i]; j++) {
        star += "★"
    }
    document.write(`${movieNames[i]} ${star}<br/>`)
}
document.write('<br/>')

// 문제2
document.write('[ 문제2 ]<br/>')
// 0: 빈좌석, 1: 예약석
let 좌석배치표 = [
    [0, 1],
    [1, 0],
    [1, 0]
]
let 빈좌석 = '<span style="color: blue">빈좌석</span>'
let 예약석 = '<span style="color: red">예약석</span>'
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        if (좌석배치표[i][j] == 0) {
            document.write(빈좌석);
        }
        else if (좌석배치표[i][j] == 1) {
            document.write(예약석);
        }
    }
    document.write('<br/>')
}