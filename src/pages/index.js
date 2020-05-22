import React from "react"
import { BaseStyles, ButtonPrimary, UnderlineNav } from "@primer/components"

export default function Home() {
  return (
    <BaseStyles>
        <UnderlineNav aria-label="Main">
        <UnderlineNav.Link href="/" selected>Home</UnderlineNav.Link>
        <UnderlineNav.Link href="/about/">About</UnderlineNav.Link>
        </UnderlineNav>    
        <h1>Hello Cupcakes!</h1>
        <p>What a treat.</p>
        <ButtonPrimary>Click Me!</ButtonPrimary>
    </BaseStyles>
  );
}
