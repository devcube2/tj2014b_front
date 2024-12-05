let 할일번호 = 1
let 할일목록 = []

할일출력()

function 할일등록() {
    const todoInputBox = document.querySelector('#todo-input-box')

    const 할일 = {
        할일번호: 할일번호++,
        할일내용: todoInputBox.value,
        할일상태: false
    }

    할일목록.push(할일)
    할일출력()
}

function 할일수정(할일번호) {
    for (let i = 0; i < 할일목록.length; i++) {
        if (할일목록[i].할일번호 == 할일번호) {
            할일목록[i].할일상태 = !(할일목록[i].할일상태)
            break
        }
    }
    // console.log(할일목록)
    할일출력()
}

function 할일삭제(할일번호) {
    for (let i = 0; i < 할일목록.length; i++) {
        if (할일목록[i].할일번호 == 할일번호) {
            할일목록.splice(i, 1)
            break
        }
    }
    
    할일출력()
}

function 할일출력() {
    const todo = document.querySelector('#todo-list')

    let html = ''
    for (let i = 0; i < 할일목록.length; i++) {
        html += `
            <div class="todo ${할일목록[i].할일상태 ? 'success' : ''}">
                <span class="${할일목록[i].할일상태 ? 'line-through' : ''}">${할일목록[i].할일내용}</span>
                <div>
                    <button type="button" onclick="할일수정(${할일목록[i].할일번호})">수정</button>
                    <button type="button" onclick="할일삭제(${할일목록[i].할일번호})">삭제</button>
                </div>
            </div>
        `
    }
    todo.innerHTML = html
}