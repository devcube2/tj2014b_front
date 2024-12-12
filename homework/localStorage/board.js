// 배열로 가져오기
const board = JSON.parse(localStorage.getItem('board'))

let tbody = document.querySelector('table > tbody')

let html = ''
for (let index = 0; index < board.length; index++) {
    let article = board[index]
    let info = article.split(',') // csv 형식은 ,(쉼표)로 구분했기 때문에 ,(쉼표) 다시 분해한다.
    // 각 정보들을 HTML 과 연동해서 작성하기
    html += `
            <tr>
                <td> ${info[3]} </td>
                <td> <a href="view.html?index=${index}">${info[0]}</a> </td>
                <td> ${info[4]} </td>
            </tr>
        `
}

tbody.innerHTML = html