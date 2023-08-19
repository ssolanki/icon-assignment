import { styled } from "styled-components";
import Image from 'next/image'

export const Section = styled("div")`
`

export const Heading = styled("p")`
    color: #FFF;
    font-family: Helvetica Neue;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 133.6%; /* 21.376px */
    letter-spacing: -0.32px;
`


export const TopContainer = styled("div")`
    padding: 0px 199px 27px;
    display: flex;
    align-items: center;
`

export const Container = styled("div")`
    display: flex;
`

export const ImgContainer = styled("div")`
    width: 20%;
`

export const SocialImg = styled(Image)`
    width: 24px;
    height: 24px
`

export const Img = styled(Image)`
    width: 100%;
    height: auto;
    border-right: 4px solid #fff;
    border-top: 3px solid #fff;
    margin-bottom: -4px;
`
