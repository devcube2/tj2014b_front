let 인사정보 = []

function 인사정보등록() {
    console.log('인사정보등록 실행')
    let 사원번호 = document.getElementById('staff-id').value
    let 이름 = document.getElementById('staff-name').value
    let 생년월일 = document.getElementById('staff-birthday').value
    인사정보.push(`[${사원번호}, ${이름}, ${생년월일}]`)    
    console.log(`인사정보: ${인사정보}`)
}