// [1] 매개변수 x , 반환값 x
function func1( ){ console.log('func1 execute')} // fu+엔터
// [2] 매개변수 o , 반환값 x
function func2( x , y ){ console.log(`func2 execute ${x+y}`)}
// [3] 매개변수 o , 반환값 o
function func3( x, y ){ 
    let result = x+y; 
    return result; 
}
// [4] 매개변수 x , 반환값 o
function func4(){
    console.log('func4 execute'); return 10;
}
