// cafeDetailAdmin 파일들에서 공통적으로 사용할 js 파일

function edit() {
    console.log("테스트 출력")

}

function del() {
    if (!confirm("삭제하시겠습니까?")) {
        alert("취소되었습니다");
    } else {
        alert("삭제 기능은 아직 지원하지 않습니다");
    }
}