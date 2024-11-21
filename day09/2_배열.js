/*
    - 타입
        - 각 프로그래밍 언어들이 데이터들을 분류 하는 것 ( 예] 분리수거 )
        - 페트병인지?? 종이류 인지?? 유리인지?? 병인지??
        - 문자인지?? ""  , '' , ``
        - 불리언인지?? true , false        
        - 숫자인지?? 154 , 3.15 , 747
        - 배열인지?? []

    - 배열(Array)
        - 나열 : 열거 하기 위해 하나씩 줄로 하는 것
        - 열거 : 여러가지를 낱낱이 늘어 놓음
        1. 배열이란? 순서대로 번호를 붙인 원소 들이 연속적인 형태로 구성된 타입
        2. 인덱스이란? 순서대로 배정된 번호 , 0번 시작 , 길이/총개수 : 3 개이면 인덱스 0 1 2
        3. 배열선언 : [ ] 대괄호
            let 변수명 = [ 값1, 값2, 값3 ] , []대괄호 ㅗ안에서 ,(쉼표)를 이용한 값을 구분하여 열거 한다.
        4. 배열전체 호출 :
            변수명
        5. 배열내 특정한 위치의 요소(값) 호출
            변수명[인덱스]
        6. 배열 수정
            1. 전체 수정
                배열변수명 = 새로운 배열
            2. 특정한 위치의 요소(값) 수정
                배열변수명[인덱스] = 새로운 값
        7. 배열내 (마지막 인덱스) 새로운 값 추가
            배열변수명.push(새로운 값)

*/
// * 개발자도구[크롬F12] 에서 데이터 출력할떄 사용하는 함수 , console.log()

// [1] 배열변수 선언
let pointArray = [ 100 , 50 , 30 ]
// [2] 배열변수의 값들을 호출
pointArray // 변수의 값 호출 ,
console.log(pointArray) // 변수의 값 호출 해서 개발자도구에 출력
// [3] 배열변수의 특정한 위치의 요소(값) 호출
console.log(pointArray[0]) // 0번 인덱스의 존재하는 데이터 가 반환 // 100
console.log(pointArray[1]) // 0번 인덱스의 존재하는 데이터 가 반환 // 50
console.log(pointArray[2]) // 0번 인덱스의 존재하는 데이터 가 반환 // 30
// [생각해보기] : 변수 몇개?? , 리터럴 몇개?? , 타입 몇개?? , 변수는 몇개 저장하고 있을까요??
// 결과 보다 과정(생각연습)
// [확인] 변수:pointArray , 리터럴:100,50,30 , 타입 몇개?? 2개 : 숫자타입, 배열타입 / 변수는 몇개 저장? 배열 변수
// * 변수는 여러개 데이터를 갖는 배열타입 1개 지정 * 변수는 1개의 데이터 만 저장 가능
// 예] 쇼핑하는데.. 콜라1개 , 과자1개 , 신발1개 , 옷1개 == 데이터 4개
// --- 쇼핑백 1개에 구매한 것들을 담아.. 쇼핑백(콜라1개 , 과자1개 , 신발1개 , 옷1개 )
// --- 쇼핑백 1개 , 쇼핑백 안에 있는 구매품 4개
// let 유재석 = ['콜라', '새우깡', '나이키신발', '티'] //쇼핑백

// [4] 배열 변수의 배열 전체 수정
console.log(pointArray)                         // [100, 50]
pointArray = ['유재석', '강호동'] // 변수 수정
console.log(pointArray)                         // ['유재석', '강호동']
// [4-2] 배열변수의 특정 위치 요소(값) 수정
pointArray[0] = '신동엽'
console.log(pointArray)                         // ['신동엽', '강호동']
// [생각해보기] : 만약에 배열변수가 수정/변경 되면 기존 [100, 50, 30] 어떻게 될까?? 존재한다O 사라진다X
// --> 100, 50, 30 => 각 리터럴/데이터 3개 / [ 10 , 50, 30 ] => 3개의 데이터를 갖는/참조 배열 1개
// --> 배열은 사라지지만 , 리터럴은 사라지지 않는다.

// [5] 배열변수의 데이터(배열내 마지막 인덱스의) 추가 함수 , 배열변수명.push()
pointArray.push('서장훈')                        // ['신동엽', '강호동'] ---> push('서장훈')
console.log(pointArray)                         // ['신동엽', '강호동', '서장훈]