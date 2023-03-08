import { Inter } from "next/font/google";
import { Button } from "@/components/atomes/Button/Button";
import { Input } from "@/components/atomes/Input/Input";
import { useRef, useState } from "react";
import { TextButton } from "@/components/atomes/Button/TextButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const errorMessage = inputValue.length >= 30 ? "값을 입력해 주세요." : "";

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
                    errorMessage={errorMessage}
                    isRequired
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
        </>
    );
}
