import React from "react"
import { BaseStyles, UnderlineNav } from "@primer/components"

export default function About() {
  return (
    <BaseStyles>
        <UnderlineNav aria-label="Main">
        <UnderlineNav.Link href="/">Home</UnderlineNav.Link>
        <UnderlineNav.Link href="/about/" selected>About</UnderlineNav.Link>
        </UnderlineNav>   
      <h1>About me</h1>
      <p>I'm a person that likes cupcakes</p>
    </BaseStyles>
  );
}