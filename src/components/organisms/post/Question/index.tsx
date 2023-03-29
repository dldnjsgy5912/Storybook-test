import * as React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MessageIcon from "@mui/icons-material/Message";
import { Grid } from "@mui/material";
import { StyledIcon, StyledQuestion } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { increment } from "@/store/counterReducer";

const imageUrls = [
    "https://charancha.com/uploads/carimg/xxlarge/2023/b5362bf0-0e6a-49d3-9fee-2a81e4fd76a6.jpg?w=1200&h=675&f=webp",
    "https://charancha.com/uploads/carimg/xxlarge/2023/a84ae867-34e0-400f-8eb5-a62c8da0c900.jpg?w=1200&h=675&f=webp",
    "https://charancha.com/uploads/carimg/xxlarge/2023/51b57a76-e3ec-4ba8-bb34-01954cc3e097.jpg?w=1200&h=675&f=webp",
    "https://charancha.com/uploads/carimg/xxlarge/2023/2fc95cc5-96de-4567-99b5-37d9deb03835.jpg?w=1200&h=675&f=webp",
];
const blurDataURL =
    "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";

export default function Question() {
    const count = useSelector((state: RootState) => state.counter.value);
    const answer = useSelector((state: RootState) => state.answer);
    const dispatch = useDispatch();

    return (
        <StyledQuestion>
            <h1 style={{ fontWeight: 700 }}>{`<중고차비교문의>`}</h1>
            <p>3시리즈 G20 LG 전과 후 모임중 고민인데 한번 봐주세요</p>
            <Grid container spacing={1}>
                {imageUrls.map((url, i) => {
                    return (
                        <Grid item xs={12} md={6} key={i}>
                            <div
                                style={{
                                    position: "relative",
                                    height: "300px",
                                }}
                            >
                                <Image
                                    fill
                                    src={url}
                                    alt="Picture of me"
                                    sizes="100%"
                                    placeholder="blur"
                                    blurDataURL={blurDataURL}
                                />
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
            <StyledIcon>
                <ThumbUpAltIcon sx={{ cursor: "pointer" }} onClick={() => dispatch(increment())} />
                <span>{count}</span>
                <MessageIcon sx={{ cursor: "pointer" }} />
                <span>{answer.length}</span>
            </StyledIcon>
        </StyledQuestion>
    );
}
