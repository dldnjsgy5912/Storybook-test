import { Inter } from "next/font/google";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const userId = useRef("");
    const [inputValue, setInputValue] = useState("");

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: React.MutableRefObject<string>
    ) => {
        const value = e.target.value;
        type.current = value;
    };

    return (
        <>
            <Button
                label="회원가입"
                mode="soild-blue"
                onClick={() => console.log("테스트")}
                size={"large"}
            />
            <Button label="버튼" mode="soild-black" />
            <Button label="버튼" mode="soild-white-blue" />
            <Button label="버튼" mode="soild-white-black" />
            <Button label="버튼" mode="outline-blue" />
            <Button label="버튼" mode="outline-white" />

            <form>
                <Input
                    label="라벨 테스트"
                    type="text"
                    errorMessage={
                        inputValue.length >= 30 ? "값을 입력해 주세요." : ""
                    }
                    isRequired
                    onChange={(e) => {
                        onChange(e, userId);
                    }}
                />
                <Button
                    label="회원가입"
                    mode="soild-blue"
                    onClick={() => console.log(userId)}
                    size={"large"}
                />
            </form>

            {inputValue}
        </>
    );
}
