import React from "react";
import { Header, Button, Fact } from "./components";
import { ContextProvider } from "./Context/contextProvider";
import '../style.css'

export function App() {
    return(
        <div>
            <Header />
            <main>
            <ContextProvider>
            <Fact />
            <Button tittle='Generate new fact!' />
            </ContextProvider>
            </main>
        </div>
    )
}