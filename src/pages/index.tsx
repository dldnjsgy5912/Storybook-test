import { Button } from "@/components/atomes/Button/Container/Button";
import { List } from "@/components/atomes/List/List";
import Link from "next/link";

export default function Home() {
    const data = [
        {
            carNm: "차32408",
            title: "사고싶다",
            hashtag: "#첫차",
            like: 0,
            comment: 4,
            view: 0,
            time: 0,
        },
        {
            carNm: "차32408",
            title: "첫 차 의견 부탁드려요.",
            hashtag: "#첫차",
            like: 0,
            comment: 4,
            view: 0,
            time: 0,
        },
        {
            carNm: "차32408",
            title: "첫차로 하이브리드 어떤가요?",
            hashtag: "#첫차",
            like: 0,
            comment: 4,
            view: 0,
            time: 0,
        },
        {
            carNm: "차32408",
            title: "고민중입니다.",
            hashtag: "#첫차",
            like: 0,
            comment: 4,
            view: 0,
            time: 0,
        },
    ];

    return (
        <>
            <List data={data} />
        </>
    );
}
