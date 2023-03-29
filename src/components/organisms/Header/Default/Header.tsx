import { TextButton } from "@/components/atomes/Button/Text/TextButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledButtonArea, StyledHeader, StyledTopArea } from "./styled";

const Header = () => {
    const router = useRouter();
    return (
        <StyledHeader>
            <StyledTopArea>
                {/* <i className="icon-Arrow-Back" onClick={() => router.back()} /> */}
                <h1>커뮤니티</h1>
                <Link href="/profile/1">
                    <TextButton label="프로필페이지" />
                </Link>
            </StyledTopArea>
            <StyledButtonArea>
                <Link href="/">
                    <TextButton label="전체" />
                </Link>
                <Link href="/post/1">
                    <TextButton label="상세페이지" />
                </Link>
                {/* <Link href="/user/login">
                    <TextButton label="로그인페이지" />
                </Link> */}
                <Link href="/user/register">
                    <TextButton label="회원가입페이지" />
                </Link>
                <Link href="/editor/new">
                    <TextButton label="글쓰기페이지" />
                </Link>
            </StyledButtonArea>
        </StyledHeader>
    );
};

export default Header;
