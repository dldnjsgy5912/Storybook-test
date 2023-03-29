import { useRouter } from 'next/router';
import React from 'react';
import { StyledList, StyledListCarInfo, StyledLists, StyledListTitleInfo, StyledListViewInfo } from './styled';

interface ListProps {
    carNm: string;
    title: string;
    hashtag: string;
    like: number;
    comment: number;
    view: number;
    time: number;
}

export const List = ({ data }: { data: ListProps[] }) => {
    const router = useRouter();

    return (
        <StyledLists>
            {data.map((data: ListProps, i: number) => {
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
