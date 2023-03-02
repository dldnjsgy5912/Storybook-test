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
            <Button type="button" label="버튼" soild="blue" isLoadiong />
            <Button type="button" label="버튼" size="xlarge" soild="black" />

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
            </form>

            {inputValue}
        </>
    );
}
