/*
    삼목(틱택토) 게임
        - 지문1 : 구축하기 위해 필요한 메모리 구성 , 변수와 배열 를 어떻게 구성할지 고민
        - 지문2 : 게임종료 의 경우의 수 판단하기 , 승리/패배/무승부 가 나오는 경우 고민
            - 지문2-1 : 경우의 수를 한글로 생각
            - 지문2-2 : 한글로 표현된 것을 IF 조건문으로 표현
        - 종이 제출
            1. 지문1 작성
            2. 지문2-2 작성
            * 전체 삼목 게임 코드 완성 구현이 아닙니다.      

        [ 메모리 설계 ]
         1. 1칸에는 '빈칸'(공백) or 'O'(플레이어1) or 'X'(플레이어2) 중 1개
         2. 총 게임 판넬은 9칸

*/

let 판 = [
    ['' , '' , ''],
    ['' , '' , ''],
    ['' , '' , '']
]

function is_winner(mark) {
    if (판[0][0] == 판[0][1] == 판[0][2] == mark) {
        return true
    }
    else if (판[1][0] == 판[1][1] == 판[1][2] == mark) {
        return true
    }
    else if (판[2][0] == 판[2][1] == 판[2][2] == mark) {
        return true
    }
    else if (판[0][0] == 판[0][1] == 판[0][2] == mark) {
        return true
    }
    else if (판[1][0] == 판[1][1] == 판[1][2] == mark) {
        return true
    }
    else if (판[2][0] == 판[2][1] == 판[2][2] == mark) {
        return true
    }
    else if (판[0][0] == 판[1][1] == 판[2][2] == mark) {
        return true
    }
    else if (판[0][2] == 판[1][1] == 판[2][0] == mark) {
        return true
    }
    return false
}

let player1 = 'O'
let player2 = 'X'
for (let i = 0; i < 8; i++) {
    // 플레이어1 or 2 가 판에 하나 체크했다고 가정

    // 누가 승리했는지 검사
    if (is_winner(player1)) {
        console.log(`${player1} 승리. ${player2} 패배.`)
    }
    else if (is_winner(player2)) {
        console.log(`${player2} 승리. ${player1} 패배.`)
    }    
}

if (is_winner(player1)) {
    console.log(`${player1} 승리. ${player2} 패배.`)
}
else if (is_winner(player2)) {
    console.log(`${player2} 승리. ${player1} 패배.`)
}
else {
    console.log(`무승부`)
}

/* 
    지문1:
        - 3개의 요소를 가진 배열 3개를 가진 배열 변수 1개
          사용자입력 변수 2개로 구성        
    
    '123' 
    '456'
    '789'

    '147', '258', '369'
    '159', '357'
*/
