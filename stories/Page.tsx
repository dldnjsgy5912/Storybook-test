import React from "react";
import { Button } from "./Button";

import { Header } from "./Header";
import "./page.css";

type User = {
    name: string;
};

export const Page: React.VFC = () => {
    const [user, setUser] = React.useState<User>();

    return (
        <article>
            <section>
                <Button label="테스트" mode="A1" />
                <Button label="테스트" mode="A2" size="xlarge" />
                <Button label="테스트" mode="B1" />
                <Button label="테스트" mode="B2" />
                <Button label="테스트" mode="C1" />
                <Button label="테스트" mode="C2" />
            </section>
        </article>
    );
};
