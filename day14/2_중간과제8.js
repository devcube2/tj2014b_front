/*
    실습 : 비회원제 게시판 구현하기
        [요구사항]
        - 하나의 HTML 에서 작업
        1. 게시물 등록 : 비회원제 이므로 제목, 내용, 비밀번호 입력 받아 등록 처리
        2. 게시물 전체 출력 : 날짜, 제목, 조회수 순으로 전체 게시물을 출력 해주세요.
        3. 게시물 (1개)상세 출력 : 전체 출력화면에서 특정한 제목을 클릭시 클릭한 게시물의 상세 정보를 보여주세요.
            상세 정보 : 날짜,제목,조회수,내용   / 조회수 : 상세 정보 조회시 1증가
        4. 게시물 삭제 : 상세 출력 화면에서 삭제 버튼 클릭시 비밀번호를 입력받아 일치하면 삭제 처리
        5. 게시물 수정 : 상세 출력 화면에서 수정 버튼 클릭시 비밀번호를 입력받아 일치하면 새로운 내용을 입력받아 수정 처리

        let 게시물목록 = [
            ['2024-11-28', '게시판 구현하기', '비회원제 게시판을 구현하세요', 5],
            ['2024-11-28', '게시판 구현하기2', '비회원제 게시판을 구현하세요2', 4],
            ['2024-11-28', '게시판 구현하기2', '비회원제 게시판을 구현하세요3', 3],
        ]
    
    [ CRUD ] C(Create) r(read) u(update) d(delete)
        등록         , 출력          , 수정             , 삭제 : 기본 베이스
        회원가입       마이페이지       회원수정           회원탈퇴
        제품등록       제품목록         제품수정           제품삭제
        게시물쓰기     게시물목록       게시물수정         게시물삭제
        쪽지보내기     받은쪽지보기     쪽지읽은상태수정    쪽지삭제

    [개발순서]
        1. 각 기능별 화면 배치 구성도 작성
        2. 등록 기능 구현
        3. 전체 출력 기능 구현
        4. 상제 출력 기능 구현
        5. 게시물 삭제 기능 구현
        6. 게시물 수정 기능 구현

        1. HTML(CSS) : 프론트엔드 와이어프레임/프로토타입 구성
        2. JS : 그 구성된 화면과 요구사항에서 필요한 메모리/데이터 구성
        3. JS: 요구사항에 따라 구현할 기능/함수 구성 , 함수별 비지니스로직 구성
        4. HTML/JS 연동
        5. 테스트
        6. 유지보수
    
    [1] HTML 작성
    [2] 구현할 페이지 메모리 구성
        - 제목 , 내용 , 비밀번호 , 작성일 , 조회수 필드값을 기록/저장
        방법1]
        let 제목목록 = [ '첫번째 게시물 제목' , '두번째 게시물 제목' , '세번째 게시물 제목' ]
        let 내용목록 = [ '첫번째 게시물 내용' , '두번째 게시물 내용' , '세번째 게시물 내용' ]
        let 비밀번호목록 = [ '1234 , '4567' , '7891' ]
        let 작성일목록 = [ '2024-11-28 , '2024-11-28' , '2024-11-28' ]
        let 조회수목록 = [ '5 , '2' , '0' ]

        방법2] 각 속성별 하나의 문자열로 구성하여 구성된 문자열을 하나의 배열에서 관리 한다.
            [ CSV 란 ] : 여러개의 값들을 쉼표(,) 로 구분한 텍스트(문자열)
                - 주의할점 데이터 자체의 ,가 존재하면 문제가 발생한다.
                - 배열의 요소 ,(쉼표) / csv의 ,(쉼표)
                - 값을 다시 구분할때는 문자열 함수 , 문자열.split(',') 이용한 분해 가능
            첫번째게시물 : '첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3'
            두번째게시물 : '두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2'
            세번째게시물 : '세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0'
    [3] 함수/기능 구성
        1. 등록함수 : [등록] 버튼 클릭시 입력받은 3개값(제목,내용,비밀번호)를 JS 가져와서 배열에 저장
        2. 출력함수 : 배열내 변화(등록/삭제//수정) 있을경우 배열내 모든 정보(게시물)를 출력하는 함수
        3. 삭제함수 : [삭제] 버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호 와 일치하면 배열내 해당 게시물 삭제 함수
        4. 수정함수 : [수정] 버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호 와 일치하면 새로운 내용을
                      입력받아 해당 게시물 내용 수정 함수 , 배열명[index]=새로운값
        
*/

// [1] 게시물들을 관리할 배열 선언 , 3개정도 샘플 데이터 , 전역변수o(JS 가 실행될때 1번 선언) vs 지역변수x:{}가 실행될때마다 선언
let 게시물목록 = [
    '첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3',
    '두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2',
    '세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0'
]

// [2] 등록함수 , 실행조건 : [등록]버튼 클릭시
function 등록함수(){ console.log('등록함수 실행')
    // 1. 입력/저장 , document.querySelector('선택자').value
    //               각 class별 input 마크업에 입력된 value 값 가져오기
    let title = document.querySelector('.title').value
    let content = document.querySelector('.content').value
    let password = document.querySelector('.password').value

    // 2. 처리 , 입력받은값들과 날짜/조회수 하나의 문자열(CSV)구성 --> 배열 저장 .push
    //     (1) 사용자에게 입력받지 않고 로직에서 초기화 해주는 변수
    // 원하는 날짜 또는 시간 구성하기
        // - 현재 날짜/시간 기능을 제공하는 객체를 변수에 저장
    let nowDate = new Date() // 현재 날짜/시간 객체
    let nowYear = nowDate.getFullYear() // 현재 연도
    let nowMonth = nowDate.getMonth()+1 // 현재 월 , +1 , 0(1월) 11(12월)
    let nowDay = nowDate.getDate() // 현재 일
    let date = `${nowYear}-${nowMonth}-${nowDay}` // 작성일
    // console.log(date)
    
    let view = 0 // 조회수 , 일반적으로 게시물 등록시 게시물 조회수는 0부터 시작
    // console.log(view)
    //     (2) 5개의 변수들을 하나의(CSV형식)문자열 로 구성
    
    let board=`${title},${content},${password},${date},${view}`
    게시물목록.push(board); //console.log(게시물목록)
    // 3. 출력
    출력함수()
}

// [3] 출력함수 , 실행조건 : js열렸을때 최초 1번 실행 , 등록/삭제/수정 처리 성공시 실행
출력함수() // <----- JS가 실행될때 최초 1번만 실행
function 출력함수(){
    // (1) 어디에 , table > tbody
    let tbody = document.querySelector('table > tbody')
    // (2) 무엇을 , 배열 요소들을
    let html = ''
    for (let index = 0; index < 게시물목록.length; index++) {
        let board = 게시물목록[index]
        let info = board.split(',') // csv 형식은 ,(쉼표)로 구분했기 때문에 ,(쉼표) 다시 분해한다.
        // 각 정보들을 HTML 과 연동해서 작성하기
        html += `
            <tr>
                <td> ${ info[3] } </td>
                <td> <a href="#" onclick="상세출력함수(${index})">${ info[0] }</a> </td>
                <td> ${ info[4] } </td>
            </tr>
        `        
    }
    // (3) 출력 , .innerHTML
    tbody.innerHTML = html
}

// [4] 상세출력함수 , 실행조건 : 전체출력화면에서 특정한 제목을 클릭했을때
function 상세출력함수(index){ 
    // console.log(`상세출력함수 실행: ${index}`)
    // 1. 어디에 , document.querySelector()
    
    // 2. 무엇을 , 배열 정보를 HTML 로 구성 , 선택한 게시물 인덱스의 정보를 , index    
    let board = 게시물목록[ index ]     // (1) 선택한 인덱스의 게시물 호출
    // console.log(`board: ${board}`)
    let info = board.split(',')        // (2) 게시물 문자열 ,(쉼표) 기준으로 분해
        // info[0] = 제목 , info[1] 내용 , info[2] 비밀번호 , info[3] 작성일 , info[4] 조회수
    // 3. 출력 , innerHTML
    // console.log(`info: ${info}`)
    document.querySelector('.titleBox').innerHTML = info[0] // 제목 데이터를 .titleBox 마크업 사이에 대입
    document.querySelector('.contentBox').innerHTML = info[1] // 내용 데이터를 .contentBox 마크업 사이에 대입
    document.querySelector('.dateBox').innerHTML = info[2] // 작성일 데이터를 .dateBox 마크업 사이에 대입
    document.querySelector('.viewBox').innerHTML = info[3] // 조회수 데이터를 .viewBox 마크업 사이에 대입
    document.querySelector('.btnBox').innerHTML = `<button onclick="삭제함수(${index})" type="button">삭제</button> <button type="button">수정</button>`
}

// [5] 삭제함수 , 실행조건 : [삭제]버튼 클릭시
function 삭제함수(index) { // 매개변수 , 삭제할 인덱스 번호
    console.log('삭제함수 실행')
    console.log(`${index}`)
    // 1. 배열내 특정하 인덱스 의 요소 제거 , 배열변수명.splice(삭제할인덱스 , 개수)
    게시물목록.splice(index, 1) // 내가 선택한 게시물의 인덱스를 삭제
    // 2. 화면 새로고침 / 다시 출력 / 다시 함수 호출
    출력함수()
}

// [6] 수정함수 , 실행조건 : [수정]버튼 클릭시
function 수정함수( ){ }