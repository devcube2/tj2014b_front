/*
    주제 : TODOLIST 구현 하기.

    개발순서
        1. 구현할 화면을 스케치(프로토타입) 구성 작성
        
        2. 구성한 화면을 HTML 과 CSS 로 샘플 작성하기
        
        3. (JS) 배열타입과 객체타입 를 이용한 메모리 구성
            할일코드    할일내용    할일상태
            1           밥먹기      true
            2          수업듣기     false

        - 할일코드 : 할일내용과 할일상태는 중복이 존재하므로 식별자 역활 못한다.
            - 식별자가 필요한 이유는 수정 또는 삭제시 수정/삭제할 대상이 식별 되어야한다.
        
        - 할일상태 : 할일상태는 완료(true) 또는 미완료(false) 로 표현할 생각
            - true 에 '완료' 의미 부여 , false 에 '미완료' 의미 부여
                --> 1. if 간소화 2. '완료' 단어보다 true 리터럴이 메모리가 더 적다.
        - 객체와 배열 샘플 구성 ( 표/테이블=배열 , 가로/행 = 객체1개 )

        4. (JS) 기능/이벤트 구성 : 1. 필요한 함수/기능 파악 2. 함수들이 실행되는 조건 3. 각 함수들의 매개변수/리턴값
            - 1. 등록함수 : 실행조건 : [등록]버튼 클릭시 onClick
            - 2. 출력함수 : 실행조건 : 1. js실행될때 2. 등록/수정/삭제가 성공했을때
            - 3. 수정함수 : 실행조건 : [수정]버튼 클릭시 onClick
            - 4. 삭제함수 : 실행조건 : [삭제]버튼 클릭시 onClick

        5. (JS) 함수별 로직 구현/만들기 , / 구현된 함수는 실행조건에 맞추어 함수 실행

*/

let 식별번호 = 3

//[1]
let 할일목록 = [
    { 할일코드 : 1 , 할일내용 : "수업듣기" , 할일상태 : false },
    { 할일코드 : 2 , 할일내용 : "밥먹기" , 할일상태 : true }
]
//[2] 등록함수
function 등록함수(){
    contentInput = document.querySelector('.contentInput')
    let 할일 = {
        할일코드 : 식별번호++ ,
        할일내용 : contentInput.value ,
        할일상태 : false
    }
    할일목록.push(할일)
    console.log(할일목록)
    contentInput.value = ''
    전체출력함수()
    return;
}
//[3] 전체출력함수
function 전체출력함수(){
    let todoBottom = document.querySelector('#todoBottom')
    let html = ``
    for( let index = 0; index < 할일목록.length; index++ ) {
        let info = 할일목록[index]
        html += `
            <div class="contentBox ${info.할일상태 ? 'success' : ''}">
                <div class="content">${info.할일내용}</div>
                <div class="contentBtns">
                    <button class="updateBnt" onclick="수정함수(${info.할일코드})">수정</button>
                    <button class="deleteBnt" onclick="삭제함수(${info.할일코드})">삭제</button>
                </div>
            </div>
        `
    }
    todoBottom.innerHTML = html
    return;
}
//[4] 수정함수
function 수정함수(할일코드){
    for( let index = 0; index < 할일목록.length; index++ ) {
        let info = 할일목록[index]
        if (info.할일코드 == 할일코드) {
            할일목록[index].할일상태 = true
            break
        }
    }
    전체출력함수()
    return;
}
//[5] 삭제함수
function 삭제함수(할일코드){    
    for( let index = 0; index < 할일목록.length; index++ ) {
        let info = 할일목록[index]
        if (info.할일코드 == 할일코드) {
            할일목록.splice(index, 1)
            break
        }
    }
    전체출력함수()
    return;
}