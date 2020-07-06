/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import Layout from "../components/Layout"

const Home = () => {
  return <Layout>
    
    <Styled.h1>Hello world!</Styled.h1>
    <Styled.p>Welcome to your new Gatsby site.</Styled.p>
    <Styled.p>Now go build something great.</Styled.p>
    </Layout>
}

export default Home