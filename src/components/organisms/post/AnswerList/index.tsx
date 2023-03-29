import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledAnswerHead, StyledAnswerList } from "./styled";
import { Box, Drawer } from "@mui/material";
import Report from "@/components/organisms/post/Report/index";
import { TextButton } from "@/components/atomes/Button/Text/TextButton";
import { Input } from "../../../atomes/Input/Input";
import { Button } from "@/components/atomes/Button/Container/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { add, remove } from "@/store/answerReducer";
import { useState } from "react";
import { Textarea } from "@/components/atomes/Textarea/Textarea";

type Anchor = "bottom";

export default function AnswerList() {
    const [state, setState] = useState({
        bottom: false,
    });
    const answers = useSelector((state: RootState) => state.answer);
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        title: "",
        context: "",
    });

    const handleChange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        dispatch(add(values));
        setValues({
            ...values,
            title: "",
            context: "",
        });
    };

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const page = () => (
        <Box
            sx={{
                width: "auto",
                height: "100vh",
            }}
            role="presentation"
        >
            <Report toggleDrawer={toggleDrawer} />
        </Box>
    );

    return (
        <>
            <Drawer anchor={"bottom"} open={state["bottom"]} onClose={toggleDrawer("bottom", false)}>
                {page()}
            </Drawer>

            <TableContainer component={Paper} sx={{ marginBottom: "50px" }}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <StyledAnswerHead>
                                    <TextButton
                                        label="전문가 의견 도움 신청 클릭"
                                        color="gray"
                                        fontWeight={600}
                                        size="xlarge"
                                        onClick={toggleDrawer("bottom", true)}
                                    />
                                </StyledAnswerHead>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {answers.map((answer, i) => (
                            <TableRow
                                key={answer.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <StyledAnswerList>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "end",
                                            }}
                                        >
                                            <Button
                                                label="삭제"
                                                variant="soildBlack"
                                                size="tiny"
                                                onClick={() => {
                                                    dispatch(remove(answers[i].id));
                                                }}
                                            />
                                        </div>
                                        <h1>{answer.title}</h1>
                                        <p>{answer.context}</p>
                                        <span>{answer.time}시간</span>
                                    </StyledAnswerList>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                <Input
                                    label="제목"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    isRequired
                                />
                                <Textarea
                                    label="내용"
                                    name="context"
                                    value={values.context}
                                    onChange={handleChange}
                                    isRequired
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "end",
                                    }}
                                >
                                    <Button
                                        onClick={handleSubmit}
                                        label="등록"
                                        size="xsmall"
                                        isStatus={!values.title || !values.context}
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
