/*
    중간과제1
        [ 시나리오 ] : 키오스크
         1. 고객1(유재석)이 키오스크에서 '커피' 카테고리 클릭해서 아이스커피 2개 주문 요청
         2. 고객1(유재석)은 대기번호 받아 기다린다.
         3. 고객2(강호동)이 키오스크에서 '커피' 카테고리 클릭해서
            뜨거운커피 1개 , '스무디' 카테고리 클릭해서 사과스무디 1개 주문 요청
        4. 고객2(강호동)은 대기번호 받아 기다린다.
        - 위 시나리오 에 따른 데이터들을 변수와 배열 이용한 구성

        [목표]
            1. 시나리오에 (저장/기록 할)데이터 파악
                - '유재석' , '강호동' ( 없어도 된다. ) - 대기번호 로 식별 하니까.
                - 카테고리의 '커피류' , '스무디류'
                - 제품명 : '아이스커피' , '뜨거운커피' , '스무디'
                - 주문현황 : 2 , 1/1
            2. 파악한 데이터들을 변수와 배열 문법으로 구성
                - 2개 자료를 한곳에 저장하는 방법 = 배열 [ ]
                - 1개 자료를 한곳에 저장하는 방법 = 변수
                카테고리 = ['커피류', '스무디류']
                제품명 = ['아이스커피', '핫커피', '스무디']                    
                주문1 = ['아이스커피', '아이스커피']     --> 주문1 = [ 제품목록[0] , 제품목록[0] ]
                주문2 = ['뜨거운커피', '스무디']         --> 주문2 = [ 제품목록[1] , 제품목록[2] ]
                주문목록 = [ 주문1 , 주문2 ]
            3. 변수/배열 들간의 관계 파악
                쇼핑해서 구매한 제품 : '콜라' , '과자' , 지갑(돈)
                가방('콜라', '과자', 지갑(돈)) 1개
*/

let 고객배열 = ['유재석', '강호동']
let 커피배열 = ['아이스커피', '뜨거운커피']
let 스무디배열 = ['사과스무디']
let 대기번호 = 1

// 주문서 출력
console.log(고객배열[0], 커피배열[0], 커피배열[0], 대기번호++)
console.log(고객배열[1], 커피배열[1], 스무디배열[0], 대기번호++)
