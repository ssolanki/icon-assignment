import { styled } from "styled-components";

export const Section = styled("div")`
    position: relative;
    overflow: hidden;
    max-width: 100vw;
    padding-bottom: 320px;
    @media (max-width: 1024px) {
        padding-bottom: 240px;
    }
`

export const Heading = styled("div")`
    color: #EFEFEF;
    font-size: 220px;
    font-style: normal;
    font-weight: 700;
    line-height: 95.1%;
    letter-spacing: -9.9px;
    display: flex;
    width: 200vw;
    flex-wrap: nowrap;
    margin-left: 100vw;
    @media (max-width: 1024px) {
        font-size: 64px;
        letter-spacing: -2px;
    }
`

