import { styled } from "styled-components";
import Image from 'next/image'

export const Section = styled("div")`
    padding: 0px 48px;
`

export const TopSection = styled("div")`
    padding: 171px 0px;
`

export const BannerImg = styled(Image)`
    width: 100%;
    border-radius: 24px;
`

export const BottomSection = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Heading = styled("p")`
    padding: 0px 152px;
    font-weight: 600;
    font-size: 97px;
    margin-bottom: 46px;
    color: #fff;
`

export const Summary = styled("div")`
    display: inline-block;
    max-width: 736px;
    margin: 0 auto;
    margin-bottom: 48px;
    position: relative;
    left: -44px;
`

export const Text = styled("span")`
    font-weight: 700;
    font-size: 54px;
    color: #EFEFEF;
    line-height: .95;
    letter-spacing: -2.43px;
`

export const HighlightText = styled("span")`
    font-weight: 700;
    font-size: 54px;
    color: #1CB647;
    line-height: .95;
    letter-spacing: -2.43px;
`


export const Description = styled("p")`
    font-weight: 400;
    font-size: 15px;
    color: #EFEFEF;
    line-height: 1.4;
    max-width: 526px;
    margin-bottom: 24px;
    position: relative;
    left: 260px;

`