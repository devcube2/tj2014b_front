let 할일코드 = 1

let 할일리스트 = []


function 할일등록() {
    todoInput = document.querySelector('#todoInput')

    const 할일 = {
        할일코드: 할일코드++,
        할일내용: todoInput.value,
        할일상태: false
    }
    할일리스트.push(할일)
    할일출력()
}

function 할일출력() {
    todoList = document.querySelector('#todoList')

    let html = ''
    for (let i = 0; i < 할일리스트.length; i++) {
        html += `
            <div class="todoBox ${할일리스트[i].할일상태 ? 'success' : ''}">
                <span class="${할일리스트[i].할일상태 ? 'line-through' : ''}">${할일리스트[i].할일내용}</span>
                <div>
                    <button type="button" onclick="할일수정(${할일리스트[i].할일코드})">수정</button>
                    <button type="button" onclick="할일삭제(${할일리스트[i].할일코드})">삭제</button>
                </div>
            </div>
        `
    }
    todoList.innerHTML = html
}
할일출력()

function 할일수정(할일코드) {    
    for (let i = 0; i < 할일리스트.length; i++) {
        if (할일리스트[i].할일코드 == 할일코드) {
            할일리스트[i].할일상태 = !(할일리스트[i].할일상태)
            break
        }
    }
    할일출력()
}

function 할일삭제(할일코드) {
    for (let i = 0; i < 할일리스트.length; i++) {
        if (할일리스트[i].할일코드 == 할일코드) {    
            할일리스트.splice(i, 1)
            break
        }
    } 
    할일출력()
}