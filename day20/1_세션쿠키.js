/*
    객체 : 여러가지 자료를 하나의 자료 타입 구조
        객체 종류  : 
            1. 내가만든객체 
            2.(미리존재한)남이만든객체 : document , console , new Date() 등등
                -> 남이 미리 데이터/함수 제공 함으로써 빠른개발이 가능하다. ( 도구 제공 )
                -> 내가 집을 만드는데 도구는 사서 사용한다. ( 라이브러리 )

    세션 과 쿠키
        - 브라우저( HTTP 통신 과 HTML/CSS/JS 코드를 렌더링/그려주는 프로그램 )
        - 브라우저 F12(개발자도구) -> [Application] -> 왼쪽사이드 메뉴 ( local storage(쿠키) / session storage(세션) )

        1. 세션 : 사용자가 웹페이지를 방문하고 있는 동안 메모리를 저장 하는 공간 , 브라우저 꺼지면 메모리 삭제 된다.   
            ex] 검색엔진 , 임시데이터 
            객체 : sessionStorage

        2. 쿠키 : 사용자가 웹페이지를 방문이 끝나도 메모리 저장 하는 공간 , 브라우저 꺼져도 메모리 유지 된다. ( 사용자가 직접 삭제 )
            ex] 자동로그인 기능 구현
            객체 : localStorage 
        
        sessionStorage / localStorage 객체의 속성/기능 제공    
            - .(도트/접근)연산자 : 객체내 속성 값 접근/호출 사용
            document.querySelector().value
            유재석.공부하기().밥먹기
                - 유재석.공부하기()
                    -> (공부하기()함수가 반환된) 공부한유재석.밥먹기()
            유재석.공부하기( 밥먹기 )
                - 밥먹기
                    -> 밥먹은결과를 공부하기에 대입 

            1. setItem( 'key' , value ) : 세션/쿠키 값 저장 하는 함수 , key 와 value 한쌍으로 저장 구조 
            2. getItem( 'key' ) : 세션/쿠키 값 호출 하는 함수 , key를 호출함으로써 value 가 반환되는 구조
            * 주의할점 : 세션과 쿠기는 무조건 문자열로 구성된 자료 , 문자만 저장이 가능하다. 배열이나 객체는 저장할수 없다.x
            해결책 : 타입 변환(변경)
                문자열 <-----> 객체(JSON)
                문자열 -----> 숫자 : Number( )
                숫자 -----> 문자열 : String( )   
    
    JSON( JavaScript Object Notaion ) 객체 : 자바스크립트 객체 문법의 형식 
        - 실무에서 많이 사용되는 형식 : JSON/XML/CSV
        1. JSON.stringify( { 속성명 : 값 , 속성명 : 값 } ) : { } ---> 문자열  : '{ 속성명 : 값 , 속성명 : 값 }'
        2. JSON.parse( '{ 속성명 : 값 , 속성명 : 값 }' ) : 문자열 ---> { } : { 속성명 : 값 , 속성명 : 값 }
            ->  3 와 '3' 은 다르다.     -> {} 와 '{}' 은 다르다.

*/
// [1] 세션  / 쿠기 
console.log( sessionStorage )
console.log( localStorage )

// [2] 세션 / 쿠키 데이터 삽입 , 키 와 값 을 한쌍으로 하는 데이터 구조
sessionStorage.setItem( 'name' , '유재석' ); // F12개발자 -> [APPLICATIPN] 탭 -> 왼쪽메뉴 session storage 클릭 
localStorage.setItem( 'age' , 40 )  // F12개발자 -> [APPLICATIPN] 탭 -> 왼쪽메뉴 localStorage storage 클릭 

// [3] 세션 / 쿠키 데이터 호출 , 키를 이용한 값 호출 
let 반환값1 = sessionStorage.getItem( 'name' ); console.log( 반환값1 );     // 유재석
let 반환값2 = localStorage.getItem('age'); console.log( 반환값2 );          // 40
let 반환값3 = sessionStorage.getItem( 'phone' ); console.log( 반환값3 );    // null( 객체가없다는뜻 가진 )

// [4] * 관례적으로 세션과쿠키에 객체를 대입하는 방법 , JSON객체 활용 
console.log( JSON.stringify( { "name" : "유재석" } ) );   // {"name":"유재석"} -> '{ "name" : "유재석" }'
console.log( JSON.parse( '{ "name" : "유재석"}' ) );   // '{ "name" : "유재석"}' -> {"name":"유재석"}

// sessionStorage.setItem( '할일' , { 할일내용 : '밥먹기' , 할일상태 : true } ); // 객체타입 를 저장할수 없다. 
sessionStorage.setItem( '할일' , JSON.stringify( { 할일내용 : '밥먹기' , 할일상태 : true } ) ); // {"할일내용":"밥먹기","할일상태":true}
let 반환값4 = sessionStorage.getItem( '할일' ); console.log( 반환값4 ); // '{"할일내용":"밥먹기","할일상태":true}' // 문자열 
console.log( JSON.parse( 반환값4) ) // {할일내용: '밥먹기', 할일상태: true} // 객체 
    // 개발자도구에서 F12 [conosle] 타입 확인 방법
        // 데이터가 파랑색이면 숫자 , true / false   // 데이터가 검정색이면 문자열 
        // 데이터가 ▶{ } 이면 객체 // 데이터가 ▶[ ] 이면 배열