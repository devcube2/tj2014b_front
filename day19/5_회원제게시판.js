let 회원번호 = 1
let 회원목록 = [
    // {회원번호: 1, id: 'abcd', password: '1234'}
]
let 로그인회원 = {
    // 회원번호: 1, id: 'abcd', password: '1234'
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
    console.log(회원목록)
}

function 로그인() {
    const id = document.querySelector('#input-id')
    const password = document.querySelector('#input-password')    
    
    for (let i = 0; i < 회원목록.length; i++) {
        if (회원목록[i].id === id.value) { // ID 가 존재함
            if (회원목록[i].password === password.value) { // password 도 일치함
                로그인회원 = { // 로그인 세션 정보 입력
                    회원번호: 회원목록[i].회원번호,
                    id: id.value,
                    password: password.value
                }
                alert(`${id.value} 님 반갑습니다. 로그인 되었습니다.`)
                return
            }
        }
    }

    alert(`id or password 정보가 올바르지 않습니다.`)
}

function 로그아웃() {
    로그인회원 = {} // 로그인 세션 정보 삭제
}