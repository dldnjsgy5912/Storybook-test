import { Inter } from "next/font/google";
import { Button } from "@/components/atomes/Button/Button";
import { Input } from "@/components/atomes/Input/Input";
import { useRef, useState } from "react";
import { TextButton } from "@/components/atomes/Button/TextButton";
import { Form } from "@/components/organism/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const errorMessage = inputValue.length >= 30 ? "값을 입력해 주세요." : "";

    return (
        <>
            <Form>
                <Input type="email" label="이메일" isRequired />
            </Form>
        </>
    );
}
