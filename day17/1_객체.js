/*
    #비회원제 카테고리별 댓글 게시판 (샘플: 디시인사이드 홈페이지)
        - 배열과 객체를 이용한 메모리 구성
        - 갤러리 마다 여러개 게시물 존재
        - 게시물 마다 여러개 댓글 존재

    # 권장순서
    # 1. 저장할 데이터들을 수집 , 시장조사 , 기획
    # 2. 중복을 최소화 할수 있는 데이터들을 관계별 분류
        - 갤러리 , 게시물 , 댓글
    # 3. 분류한 데이터들을 관게 연결 # 상하 관계 # 식별자 연결 # 
        - 갤러리(상) <---> 게시물(하) , (갤러리)갤러리번호 <---> (게시물)갤러리번호
        - 게시물(상) <---> 댓글(하) , (게시물)게시물번호 <---> (댓글)게시물번호
    # 4. JS로 샘플 표현하기 , 테이블(표) = 배열 , 행/가로 = 객체  

    디시 전체 배열['수영 갤러리 객체', '헬스', '게임']

    수영 갤러리 객체 = {
        게시물 번호 : Number    
        게시물 목록 : 배열[게시물 객체, 게시물 객체, 게시물 객체, ...]
    }

    게시물 객체 = {
        게시물 번호 : Number
        본문내용 : String
        댓글 목록 : 배열[댓글 객체, 댓글 객체, 댓글 객체, ...]
    }

    댓글 객체 = {
        게시물 번호 : Number
        댓글 번호 : Number
        댓글 내용 : String
    }
*/

// (1)
let 카테고리목록 = [
    { 카테고리번호: 1, 카테고리명: "해외축구" },
    { 카테고리번호: 2, 카테고리명: "비트코인" }
]
// (2)
let 게시물목록 = [
    { 
        게시물번호 : 1 , 제목 : "안녕하세요1" , 글쓴이 : "유재석1" , 작성일 : "12-01" ,
        조회수 : 3 , 내용 : "하하하하" , 비밀번호 : 1234 , 카테고리번호 : 1
    },
    { 
        게시물번호 : 2 , 제목 : "안녕하세요2" , 글쓴이 : "유재석2" , 작성일 : "12-02" ,
        조회수 : 3 , 내용 : "하하하하" , 비밀번호 : 1234 , 카테고리번호 : 2
    },
    { 
        게시물번호 : 3 , 제목 : "안녕하세요3" , 글쓴이 : "유재석3" , 작성일 : "12-03" ,
        조회수 : 3 , 내용 : "하하하하" , 비밀번호 : 1234 , 카테고리번호 : 1
    },
    { 
        게시물번호 : 4 , 제목 : "안녕하세요4" , 글쓴이 : "유재석4" , 작성일 : "12-04" ,
        조회수 : 3 , 내용 : "하하하하" , 비밀번호 : 1234 , 카테고리번호 : 1
    }
]

// (3)
let 댓글목록 = [
    {
        댓글번호 : 1 , 비밀번호 : 1234 , 내용 : "그래안녕1" , 게시물번호 : 1
    },
    {
        댓글번호 : 2 , 비밀번호 : 1234 , 내용 : "그래안녕2" , 게시물번호 : 1
    },
    {
        댓글번호 : 3 , 비밀번호 : 1234 , 내용 : "그래안녕3" , 게시물번호 : 3
    },
    {
        댓글번호 : 4 , 비밀번호 : 1234 , 내용 : "그래안녕4" , 게시물번호 : 4
    },
]