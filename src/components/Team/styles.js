import { styled } from "styled-components";
import Image from 'next/image'

export const Section = styled("div")`
    padding: 0px 0px 0px 201px;
    @media (max-width: 1024px) {
        padding: 0px 16px;
    }
`

export const Heading = styled("p")`
    color: #EFEFEF;
    font-size: 60px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -2.7px;
    margin-bottom: 64px;
    @media (max-width: 1024px) {
        font-size: 32px;
        letter-spacing: -1px;
        margin-bottom: 32px;
    }
`

export const TeamContainer = styled("div")`

`

export const Slide = styled("div")`
    margin-right: 40px;
    outline: none;
`

export const Img = styled(Image)`
    width: 373px;
    margin-bottom: 24px;
    height: 454px;
    border-radius: 20px;
    @media (max-width: 1024px) {
        max-width: 100%;
        height: auto;
    }
`

export const Name = styled("p")`
    color: #EFEFEF;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: .73
    letter-spacing: -0.81px;
`

export const Designation = styled("p")`
    color: #505050;
    font-size: 16px;
    font-weight: 300;
    line-height: .73;
    margin-top: 4px;
`

