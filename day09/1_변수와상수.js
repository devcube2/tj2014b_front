// [생각해보기] 아래 코드에서 변수의 개수 와 리터럴의 개수 를 파악하시오.
let point1 = 50 // 변수는 : point1 , 리터럴/값/데이터 : 50
let point2 = 100 // 변수는 : point2 , 리터럴/값/데이터 : 100
let point3 = 150 // 변수는 : point3 , 리터럴/값/데이터 : 150
    // 동시에 2개이상 연산이 불가능하다.
    // let point3 = point1 + point2 ( 연산 순서 )
    // [1] = 대입연산자 기준으로 오른쪽 코드 우선 ,
    // [2] = 변수의 값 호출 , 50
    // [3] = 변수의 값 호출 , 100
    // [4] + 연산자 , 50 + 100 => (리터럴) 150
    // [5] + 연산 결과를 왼족 항에 대입 , let point3 = 150
    // 결과 : 변수 3개 , 데이터 3개

// [생각해보기2] 