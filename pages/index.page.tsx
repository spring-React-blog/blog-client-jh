import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next Apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>BLOG PROJECT</Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  background-color: violet;
`;
