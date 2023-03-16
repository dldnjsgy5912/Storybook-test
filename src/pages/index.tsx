import { Button } from "@/components/atomes/Button/Button";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/ask">
                <Button label="상세페이지" />
            </Link>
        </>
    );
}
