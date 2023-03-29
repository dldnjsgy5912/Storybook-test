import { useRouter } from "next/router";
import React from "react";
import { StyledList, StyledListCarInfo, StyledLists, StyledListTitleInfo, StyledListViewInfo } from "./styled";

interface ListProps {}

export const List = ({}: ListProps) => {
    const router = useRouter();
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
        <StyledLists>
            {data.map((data, i) => {
                return (
                    <StyledList key={i} onClick={() => router.push(`/post/1`)}>
                        <StyledListCarInfo>
                            <span className="car-number">{data.carNm}</span>
                            <span className="time-history">{data.time}시간 전</span>
                        </StyledListCarInfo>
                        <StyledListTitleInfo>
                            <h1>{data.title}</h1>
                            <span>{data.hashtag}</span>
                        </StyledListTitleInfo>

                        <StyledListViewInfo>
                            <span className="like">{data.like}</span>
                            <span className="comment">{data.comment}</span>
                            <span className="view">{data.view}명 조회</span>
                        </StyledListViewInfo>
                    </StyledList>
                );
            })}
        </StyledLists>
    );
};
