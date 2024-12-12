function 등록함수() {
    console.log('등록함수 실행')
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
    let nowMonth = nowDate.getMonth() + 1 // 현재 월 , +1 , 0(1월) 11(12월)
    let nowDay = nowDate.getDate() // 현재 일
    let date = `${nowYear}-${nowMonth}-${nowDay}` // 작성일
    // console.log(date)

    let view = 0 // 조회수 , 일반적으로 게시물 등록시 게시물 조회수는 0부터 시작
    // console.log(view)
    //     (2) 5개의 변수들을 하나의(CSV형식)문자열 로 구성

    let article = `${title},${content},${password},${date},${view}`

    // localStorage 로 처리 변경
    let board = localStorage.getItem('board');
    if (board == null) {
        board = []
    }
    else {
        board = JSON.parse(board) // JSON 포맷을 배열로 형태 변환(push 하기 위해서)
    }
    board.push(article);
    // 배열을 다시 JSON 포맷으로 변경하여, localStorage 에 저장
    localStorage.setItem('board', JSON.stringify(board))
    alert('등록되었습니다.')
    location.replace("board.html") // 목록 페이지로 이동
}