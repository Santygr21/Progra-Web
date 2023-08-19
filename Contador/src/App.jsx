import React from "react";
import {Header, Button, Counter, Functionality} from "./components";

export function App(){
    return(
        <>
            <Header />
            <Counter value='0'/>
            <Functionality />
        </>
    )
}