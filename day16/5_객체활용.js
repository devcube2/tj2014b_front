let eno = 1

let 사원목록 = []

let 평가목록 = []

function 사원등록() {
    let name = document.querySelector('.name').value
    let birth = document.querySelector('.birth').value
    let info = {
        사원번호: eno,
        사원명: name,
        생년월일: birth
    }
    사원목록.push(info)
    eno++
    console.log(사원목록)
    사원전체출력()
}

사원전체출력()
function 사원전체출력() {
    let tbody = document.querySelector('.사원테이블')
    let html = ''

    for (let index = 0; index < 사원목록.length; index++) {
        let info = 사원목록[index]
        html += `
            <tr>                
                <td>${info.사원번호}</td>
                <td>${info.사원명}</td>
                <td>${info.생년월일}</td>
                <td>
                    <button type="button" onclick="평가등록출력(${info.사원번호})">평가등록</button>
                    <button type="button" onclick="사원별평가내역출력(${info.사원번호})">평가결과</button>
                </td>
            </tr>
        `
    }
    tbody.innerHTML = html
}

function 평가등록출력(클릭된사원번호) {
    console.log(클릭된사원번호)

    let 검색사원 = null
    for (let index = 0; index < 사원목록.length; index++) {
        let info = 사원목록[index]
        if (info.사원번호 == 클릭된사원번호) {
            검색사원 = info
            break
        }
    }

    if (검색사원 == null) {
        alert('사원정보가 없습니다.')
        return
    }

    let div = document.querySelector('.평가입력구역')
    let html = `
        <h3> 사원 평가 등록 </h3>
        <form>
            <h5> 평가사원명 : ${검색사원.사원명} </h5>
            평가연도 : <input type="text" class="평가연도" />
            상반기평가 : <input type="text" class="상반기평가" />
            하반기평가 : <input type="text" class="하반기평가" />
            <button type="button" onclick="평가등록(${검색사원.사원번호}, '${검색사원.사원명}')"> 점수 등록 </button>
        </form>
    `
    div.innerHTML = html
}

function 평가등록(사원번호, 사원명) {
    let 평가연도 = document.querySelector('.평가연도').value
    let 상반기평가점수 = document.querySelector('.상반기평가').value
    let 하반기평가점수 = document.querySelector('.하반기평가').value
    let 평가 = {
        사원번호: 사원번호,
        사원명: 사원명,
        평가연도: 평가연도,
        상반기점수: 상반기평가점수,
        하반기점수: 하반기평가점수
    }
    평가목록.push(평가)
    console.log(평가목록)
}

function 사원별평가내역출력(클릭된사원번호) {
    let 평가 = []
    for (let index = 0; index < 평가목록.length; index++) {
        if (평가목록[index].사원번호 == 클릭된사원번호) {
            평가.push(평가목록[index])            
        }
    }
    if (평가.length == 0) {
        alert('평가 정보가 없습니다.')
        return
    }
    
    let html = `
        <h3>${평가[0].사원명} 사원 평가</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>연도</th>
                    <th>상반기</th>
                    <th>하반기</th>
                </tr>
            </thead>
            <tbody>
    `
    for (let index = 0; index < 평가.length; index++) {
        html += `
            <tr>
                <td>${평가[index].평가연도}</td>
                <td>${평가[index].상반기점수}</td>
                <td>${평가[index].하반기점수}</td>
            </tr>
        `
    }
    html += '</tbody></table>'

    let div = document.querySelector('.평가출력구역')
    div.innerHTML = html
}