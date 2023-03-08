import { Inter } from "next/font/google";
import { Button } from "@/components/atomes/Button/Button";
import { Input } from "@/components/atomes/Input/Input";
import { useRef, useState } from "react";
import { TextButton } from "@/components/atomes/Button/TextButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const userId = useRef("");

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: React.MutableRefObject<string>
    ) => {
        const value = e.target.value;
        type.current = value;
    };
    console.log("userId", userId);

    return (
        <>
            <TextButton type="button" label="버튼" />
            <Button
                type="button"
                label="버튼"
                size="xlarge"
                variant="soildBlue"
                isLoadiong
            />

            <form>
                <Input
                    label="라벨 테스트"
                    type="text"
                    // errorMessage={
                    //     inputValue.length >= 30 ? "값을 입력해 주세요." : ""
                    // }
                    isRequired
                    onChange={(e) => {
                        onChange(e, userId);
                    }}
                />
            </form>

            {/* {userId} */}
        </>
    );
}
