let 아이디목록 = []
let 비밀번호목록 = []

function signUp() {
    id = document.querySelector("#sign-up>#sign-up-id")
    pass = document.querySelector("#sign-up>#sign-up-pass")
    아이디목록.push(id.value)
    비밀번호목록.push(pass.value)
    alert(`${id.value} 님 회원가입완료`)
    // console.log(아이디목록)
    // console.log(비밀번호목록)
}

function signIn() {
    id = document.querySelector("#sign-in>#sign-in-id")
    pass = document.querySelector("#sign-in>#sign-in-pass")
    // 아이디 존재여부 확인
    let index = 아이디목록.indexOf(id.value);

    if (index >= 0) {
        if (비밀번호목록[index] === pass.value) {
            // document.write('로그인 성공')
            alert('로그인 성공')
        }
        else {
            alert('로그인 실패')    
        }
    }
    else {
        alert('로그인 실패')
    }
    console.log(`index: ${index}`)
}