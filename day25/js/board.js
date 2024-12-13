function 출력함수(){
    let tbody = document.querySelector('table > tbody')
    let html = ''
    for (let index = 0; index < 게시물목록.length; index++) {
        let board = 게시물목록[index]
        let info = board.split(',')
        html += `
            <tr>
                <td> ${ info[3] } </td>
                <td> <a href="#" onclick="상세출력함수(${index})">${ info[0] }</a> </td>
                <td> ${ info[4] } </td>
            </tr>
        `        
    }
    tbody.innerHTML = html
}