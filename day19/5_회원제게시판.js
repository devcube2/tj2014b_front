let 회원번호 = 1
let 회원목록 = [
    // {회원번호: 1, id: 'abcd', password: '1234'}
]

// { // 회원번호: 1, id: 'abcd', password: '1234' }
let 로그인회원 = [ // 현재 구현상 1명만 유지함...
    // { // 회원번호: 1, id: 'abcd', password: '1234', 로그인시간: '2024-12-15 15:33:22' }
]

// 번호 - 제목 - 글쓴이 - 내용 - 작성일 - 조회수
let 게시물번호 = 3
let 게시판 = [
    { 번호: 1, 제목: '수영가자수영가자수영가자수영가자', 글쓴이: 'devcube', 작성일: '2024-12-15', 내용: '그래 가즈아', 조회수: 0 },
    { 번호: 2, 제목: '러닝가자', 글쓴이: 'devcube', 작성일: '2024-12-16', 내용: '춥다 쉬즈아', 조회수: 0 }
]

로그인정보출력()
게시판출력()

// 구글링해서 퍼온 함수..
function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

function dateFormat2(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return date.getFullYear() + '-' + month + '-' + day;
}

function 회원가입검사(id) {
    for (let i = 0; i < 회원목록.length; i++) {
        if (회원목록[i].id === id) {
            return true // 존재하는 ID
        }
    }
    return false // 존재하지않는 ID
}

function 로그인폼검사() {
    const id = document.querySelector('#input-id')
    const password = document.querySelector('#input-password')

    if (id.value == '') {
        alert('아이디 값을 입력해주세요.')
        return false
    }
    else if (password.value == '') {
        alert('패스워드 값을 입력해주세요.')
        return false
    }

    return true
}

function 회원가입() {
    const id = document.querySelector('#input-id')
    const password = document.querySelector('#input-password')

    if (!로그인폼검사()) {
        return
    }

    const 회원정보 = {
        회원번호: 회원번호++,
        id: id.value,
        password: password.value
    }

    if (회원가입검사(id.value)) {
        alert(`${id.value} 회원님은 이미 가입된 회원입니다.`)
        return
    }

    회원목록.push(회원정보)
    alert(`${id.value} 회원님 가입이 완료되었습니다.`)
}

function 로그인() {
    const id = document.querySelector('#input-id')
    const password = document.querySelector('#input-password')

    for (let i = 0; i < 회원목록.length; i++) {
        if (회원목록[i].id === id.value) { // ID 가 존재함
            if (회원목록[i].password === password.value) { // password 도 일치함
                const 로그인정보 = {
                    회원번호: 회원목록[i].회원번호,
                    id: id.value,
                    password: password.value,
                    로그인시간: dateFormat(new Date())
                }
                console.log(로그인정보)
                로그인회원.push(로그인정보)

                alert(`${id.value} 님 반갑습니다. 로그인 되었습니다.`)
                로그인정보출력()
                return
            }
        }
    }

    로그인정보출력()
    alert(`아이디 또는 패스워드 정보가 올바르지 않습니다.`)
}

function 로그아웃() { // 현재 구현상 1명만 유지함...
    alert(`${로그인회원[0].id} 님이 로그아웃 하였습니다.`)
    로그인회원.splice(0, 1)
    로그인정보출력()
}

function 로그인정보출력() {
    const signButtonGroup = document.querySelector('#sign-button-group')
    const welcomeMessage = document.querySelector('#welcome-message')

    signButtonGroup.innerHTML = `
        <button type="button" onclick="회원가입()">회원가입</button>
        <button type="button" onclick=${로그인회원.length > 0 ? "로그아웃()" : "로그인()"}>${로그인회원.length > 0 ? '로그아웃' : '로그인'}</button>
    `

    // 현재 구현상 1명만 유지함...
    welcomeMessage.innerHTML = 로그인회원.length > 0 ? `
            <div>
                <p><strong>${로그인회원[0].id}</strong>님 환영합니다.<p>
                <p>로그인 시간은 <strong>${로그인회원[0].로그인시간}</strong> 입니다.<p>
            </div>
        `
        : ''
}

function 게시판출력() {
    const boardList = document.querySelector('#board-list')
    let html = `
        <table border="1" style="border-collapse: collapse;">
            <thead id="board-list-head" class="board-head">
                <th>번호</th>
                <th class="wd400">제목</th>
                <th>글쓴이</th>
                <th>작성일</th>
                <th>조회수</th>
            </thead>
            <tbody id="board-list-body" class="board-body">
    `
    for (let i = 0; i < 게시판.length; i++) {
        html += `
                <tr>
                    <td>${게시판[i].번호}</td>
                    <td><a href="javascript:게시물상세보기(${게시판[i].번호}, '${게시판[i].글쓴이}')">${게시판[i].제목}</a></td>
                    <td>${게시판[i].글쓴이}</td>
                    <td>${게시판[i].작성일}</td>
                    <td>${게시판[i].조회수}</td>
                </tr>
        `
    }
    html += `
            </tbody>
        </table>
        <div id="board-list-foot" class="mt10">
            <button type="button" class="pd5 ml654" onclick="게시물등록입력()">글쓰기</button>
        </div>
    `

    boardList.innerHTML = html
}

function 게시물등록입력() {
    if (로그인회원.length == 0) {
        alert('로그인후 사용 가능합니다.')
        return
    }

    const boardView = document.querySelector('#board-view')

    boardView.innerHTML = `
        <table border="1" style="border-collapse: collapse;">
            <thead id="board-view-head" class="board-head">
                <th>제목</th>
                <th><input id="board-view-subject" class="pd5 wd500" type="text" value=""></th>
            </thead>
            <tbody id="board-view-body" class="board-body">
                <td>내용</td>
                <td>
                    <textarea id="board-view-content" rows="15"></textarea>
                </td>
            </tbody>
        </table>
        <div id="board-view-foot" class="mt10 ml538">
            <button type="button" class="pd5" onclick="게시물등록()">등록</button>
        </div>
    `
}

function 게시물등록() {
    const boardViewSubject = document.querySelector('#board-view-subject')
    const boardViewContent = document.querySelector('#board-view-content')

    const 게시물 = {
        번호: 게시물번호++,
        제목: boardViewSubject.value,
        글쓴이: 로그인회원[0].id, // 현재 구현상 로그인 1명이라 그냥 씀
        내용: boardViewContent.value,
        작성일: dateFormat2(new Date()),
        조회수: 0
    }
    게시판.push(게시물)
    게시판출력()
    alert('등록되었습니다.')
}

function 게시물수정(index) {
    if (로그인회원.length == 0) {
        alert('로그인후 사용 가능합니다.')
        return
    }
    else if (게시판[index].글쓴이 != 로그인회원[0].id) {
        alert('글쓴이만 수정 가능합니다.')
        return
    }
    const boardViewSubject = document.querySelector('#board-view-subject')
    const boardViewContent = document.querySelector('#board-view-content')
    게시판[index].제목 = boardViewSubject.value
    게시판[index].내용 = boardViewContent.value
    document.querySelector('#board-view').innerHTML = ''
    게시판출력()
    alert('수정되었습니다.')
}

function 게시물삭제(index) {
    if (로그인회원.length == 0) {
        alert('로그인후 사용 가능합니다.')
        return
    }
    else if (게시판[index].글쓴이 != 로그인회원[0].id) {
        alert('글쓴이만 수정 가능합니다.')
        return
    }
    게시판.splice(index, 1)
    document.querySelector('#board-view').innerHTML = ''
    게시판출력()
    alert('삭제되었습니다.')
}

/* textarea 안에서 글쓸때 엔터키 안먹어서 구글링해서 찾은거... 그래도 좀 불편하긴 함.. */
function onTestChange() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
        document.getElementById("board-view-content").value = document.getElementById("board-view-content").value + "\n";
        return false;
    }
    else {
        return true;
    }
}

function 게시물상세보기(번호, 글쓴이) {
    const boardView = document.querySelector('#board-view')

    for (let i = 0; i < 게시판.length; i++) {
        if (게시판[i].번호 == 번호) {
            boardView.innerHTML = `
                <table border="1" style="border-collapse: collapse;">
                    <thead id="board-view-head" class="board-head">
                        <th>제목</th>
                        <th><input id="board-view-subject" class="pd5 wd500" type="text" value="${게시판[i].제목}"></th>
                    </thead>
                    <tbody id="board-view-body" class="board-body">
                        <td>내용</td>
                        <td>
                            <textarea id="board-view-content" rows="15" autofocus onkeypress="onTestChange();">${게시판[i].내용}</textarea>
                        </td>
                    </tbody>
                </table>
                <div id="board-view-foot" class="mt10 ml500">
                    <button type="button" class="pd5" onclick="게시물수정(${i})">수정</button>
                    <button type="button" class="pd5" onclick="게시물삭제(${i})">삭제</button>
                </div>
            `
            return
        }
    }

    alert('해당하는 게시물이 없습니다.')
}