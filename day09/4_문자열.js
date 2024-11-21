/*    
    문자열 처리( 기능이 없는 문자 그자체 ) 방법
        1. ' '
        2. " "
        3. ` `    ----- 키보드 왼쪽 TAB 키 위에 ~키
    키워드/함수
        let, const, console.log
*/
// console.log(유재석)
//
// console.log ==> 문자( 미리 정의된/의미/기능이 포함된 문자 )
// 유재석 ==> 문자( 자바스크립트 회사에서 유재석 미리 정의x )

// [1] 문자열 처리
console.log('유재석')
console.log("유재석")
console.log(`유재석`)
// [2] '작은따옴표 , "큰따움표 출력
console.log("유재석'반장'")
console.log('유재석"반장"')
console.log(`'유재석'"반장"`)
// [3] 이스케이프/제어문자 , 키보드 엔터 위에 원화기호(백슬래시)\
    // 1. \n : console.log의 한줄 내림(줄바꿈)
    // 2. \" : "한개 출력 , \"\"
    // 3. \' : '한개 출력 , \'\'
    // 4. \\ : \한개 출력 , \\\\    
    // 5. \t : 탭(들여쓰기)
console.log('유재석\n\'반장\'')
console.log('유재석\n강호동')
console.log('유재석\"강호동')
console.log('유재석\'강호동')
console.log('유재석\\강호동')
console.log('유재석\t강호동')