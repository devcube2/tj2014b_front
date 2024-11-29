let 입차차량배열 = [
    "가능","가능","가능","가능",
    "가능","가능","가능","가능",
    "가능","가능","가능","가능",
    "가능","가능","가능","가능",
    "가능","가능","가능","가능"
];
let 위치 = "";
let 선택 = 0;

// 페이지로드
function 테이블로드() {
    let 임시 = "<table border = '1'>";
    let 테이블 = document.querySelector("#content");
    for(let i = 0; i < 입차차량배열.length; i+=4) {
        임시 += `<tr>
        <td style = "text-align : center;"><a id = "위치${i}" href = "#" style = "color : black; text-decoration : none; " onclick = "위치선택(${i})">${입차차량배열[i]}</a></td>
        <td style = "text-align : center;"><a id = "위치${i+1}" href = "#" style = "color : black; text-decoration : none; " onclick = "위치선택(${i+1})">${입차차량배열[i+1]}</a></td>
        <td style = "text-align : center;"><a id = "위치${i+2}" href = "#" style = "color : black; text-decoration : none; " onclick = "위치선택(${i+2})">${입차차량배열[i+2]}</a></td>
        <td style = "text-align : center;"><a id = "위치${i+3}" href = "#" style = "color : black; text-decoration : none; " onclick = "위치선택(${i+3})">${입차차량배열[i+3]}</a></td>
        </tr>`
        // console.log(임시);
    }
    // console.log(임시);
    테이블.innerHTML = 임시;
}

function 위치선택(index) {
    // console.log("시작");
    let 임시 = document.querySelector(`#위치${index}`);
    if(선택 == 0 && 임시.innerHTML == "가능") {
        선택 = 1;
        임시.innerHTML = "선택";
        위치 = index;
    } else if(선택 == 1 && 임시.innerHTML == "선택") {
        선택 = 0;
        임시.innerHTML = "가능";
        위치 = 0;
    } else if(임시.innerHTML == "불가") {
        위치 = index;
        console.log(위치);
    } else {
        alert("한개만 선택해주세요!");
    }
    // console.log("끝");
    // console.log(위치);
}

function 입차함수() {
    let 지금시간 = new Date();
    let 차량번호 = document.querySelector("#car_name");
    let 테이블 = document.querySelector("#content");
    let 저장위치 = document.querySelector(`#위치${위치}`);
    let 시 = 지금시간.getHours();
    let 분 = 지금시간.getMinutes();
    let 초 = 지금시간.getSeconds();
    if(저장위치.innerHTML == "선택") {
        입차차량배열[위치] = `${차량번호.value},${시}-${분}-${초},${위치}`;
        저장위치.innerHTML = "불가";
        위치 = 0;
        선택 = 0;
    } else {
        alert("입차불가");
    }
    // console.log(위치);
    // console.log(테이블.innerHTML);
    // console.log(`${시}시${분}분${초}초`);
    // console.log(위치);
    console.log(입차차량배열);

}

function 출차함수() {
    // console.log('출차함수 실행')

    if (입차차량배열[위치] === "가능") {
        alert("출차할 차량이 존재하지 않습니다.")
        return
    }    
    
    // console.log(`위치: ${위치}`)
    let 입차차량정보 = 입차차량배열[위치].split(',')
    // console.log(`입차차량정보: ${입차차량정보}`)
    let 차량번호 = 입차차량정보[0]
    let 입차시간 = 입차차량정보[1]
    let 차량위치 = 입차차량정보[2]

    // console.log(`입차시간: ${입차시간}`)
    
    alert(`'${차량번호}' 차량 출차가 완료되었습니다. 정산 가격은 ${정산함수(입차시간)} 원 입니다.`)

    // 최종 처리후 '가능'으로 변경
    입차차량배열[위치] = "가능"
    document.querySelector(`#위치${차량위치}`).innerHTML = "가능"
    테이블로드()
}

function 정산함수(입차시간) {
    // console.log('정산함수 실행')
    
    입차시간 = 입차시간.split('-')
    let 입차시 = Number(입차시간[0])
    let 입차분 = Number(입차시간[1])
    let 입차초 = Number(입차시간[2])
    // console.log(`입차시: ${입차시} 입차분: ${입차분} 입차초: ${입차초}`)

    let 출차시간 = new Date()
    let 출차시 = Number(출차시간.getHours())
    let 출차분 = Number(출차시간.getMinutes())
    let 출차초 = Number(출차시간.getSeconds())
    // console.log(`출차시: ${출차시} 출차분: ${출차분} 출차초: ${출차초}`)

    let 총주차시간초 = ((출차시 - 입차시) * 3600) + ((출차분 - 입차분) * 60) + (출차초 - 입차초)
    
    return 총주차시간초 * 100    
}