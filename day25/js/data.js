/* localStorage 에 배열정보 불러오기 함수 */
function getBoardList() {
    // 1. localStorage 배열 정보 요청
    let boardList = localStorage.getItem('boardList')
    if (boardList == null) { // 2. 만약에 localStorage 비어있으면
        boardList = [] // 3. 빈배열 대입 해주고
    }
    else { // 있으면
        boardList = JSON.parse(boardList) // 4. JSON(JS 객체)로 변환해서 대입
    }
    return boardList // 5. 현재 함수를 호출했던곳으로 게시물 배열을 반환
}

/* localStorage에 게시물 배열 정보 저장 함수 */
function setBoardList(boardList) {
    localStorage.setItem('boardList', JSON.stringify(boardList))
}