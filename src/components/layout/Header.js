import React, {Fragment} from "react";
const Header = () => {
    return (
        <>
            <header><h1>JSP 프로젝트 v1</h1></header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/member/join">회원가입</a></li>
                    <li><a href="/member/login">로그인</a></li>
                    <li><a href="/board/list">게시판</a></li>
                    <li><a href="/member/myinfo">회원정보</a></li>
                </ul>
                <hr />
            </nav>
        </>
    );
}

export default Header;