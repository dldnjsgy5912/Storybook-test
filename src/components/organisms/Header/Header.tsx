import { TextButton } from "@/components/atomes/Button/Text/TextButton";
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <Link href="/article/1">
                <TextButton label="상세페이지" />
            </Link>
            <Link href="/user/login">
                <TextButton label="로그인페이지" />
            </Link>
            <Link href="/article/1">
                <TextButton label="상세페이지" />
            </Link>
            <Link href="/article/1">
                <TextButton label="상세페이지" />
            </Link>
            <Link href="/article/1">
                <TextButton label="상세페이지" />
            </Link>
        </div>
    );
};

export default Header;
