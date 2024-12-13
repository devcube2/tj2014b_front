function 등록함수(){
    let title = document.querySelector('.title').value
    let content = document.querySelector('.content').value
    let password = document.querySelector('.password').value

    let nowDate = new Date()
    let nowYear = nowDate.getFullYear()
    let nowMonth = nowDate.getMonth()+1
    let nowDay = nowDate.getDate()
    let date = `${nowYear}-${nowMonth}-${nowDay}`
    
    let view = 0

    let boardList = getBoardList();
    
    let bno = boardList.length > 0 ? board[boardList.length-1].bno+1 : 1
    
    // let board=`${title},${content},${password},${date},${view}`
    let board = {
        bno : bno ,
        title : title ,
        content : content ,
        password : password ,
        date : date ,
        view : view
    }

    boardList.push(board)
    // 게시물 배열 상태를 localStorage 등록
    setBoardList(boardList)
    // 메시지 안내
    alert('게시물 등록 성공')
    // a태그처럼 페이지 전환 함수
    location.href="board.html"
}