import { Inter } from "next/font/google";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [inputValue, setInputValue] = useState("");
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
                    type="password"
                    errorMessage={
                        inputValue.length >= 30 ? "값을 입력해 주세요." : ""
                    }
                    isRequired
                    onChange={(e) => {
                        setInputValue(() => e.target.value);
                    }}
                />
                <Button
                    label="회원가입"
                    mode="soild-blue"
                    onClick={() => console.log("테스트")}
                    size={"large"}
                />
            </form>

            {inputValue}
        </>
    );
}
