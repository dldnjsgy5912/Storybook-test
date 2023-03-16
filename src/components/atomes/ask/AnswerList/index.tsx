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
import Report from "@/components/atomes/ask/Report/index";
import { TextButton } from "@/components/atomes/Button/TextButton";

interface answersProp {
    title: string;
    context: string;
    time: number;
}
type Anchor = "bottom";

export default function AnswerList({ answers }: { answers: answersProp[] }) {
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
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
            <Drawer
                anchor={"bottom"}
                open={state["bottom"]}
                onClose={toggleDrawer("bottom", false)}
            >
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
                        {answers.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <StyledAnswerList>
                                        <h1>{row.title}</h1>
                                        <p>{row.context}</p>
                                        <span>{row.time}시간</span>
                                    </StyledAnswerList>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
