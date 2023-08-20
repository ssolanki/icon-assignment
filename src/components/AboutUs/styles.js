import { styled } from "styled-components";
import Image from 'next/image'

export const Section = styled("div")`
    padding: 0px 48px;
    @media (max-width: 1024px) {
        padding: 0px 16px;
    }
`

export const TopSection = styled("div")`
    padding: 171px 0px;
    @media (max-width: 1024px) {
        padding: 32px 0px 48px;
    }
`

export const BannerImg = styled(Image)`
    width: 100%;
    border-radius: 24px;
    height: auto;
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
    @media (max-width: 1024px) {
        padding: 0px 32px;
        font-size: 32px;
        margin-bottom: 16px;
    }
`

export const Summary = styled("div")`
    display: inline-block;
    max-width: 736px;
    margin: 0 auto;
    margin-bottom: 48px;
    position: relative;
    left: -44px;
    @media (max-width: 1024px) {
        max-width: auto;
        left: 0px;
    }
`

export const Text = styled("span")`
    font-weight: 700;
    font-size: 54px;
    color: #EFEFEF;
    line-height: .95;
    letter-spacing: -2.43px;
    @media (max-width: 1024px) {
        font-size: 24px;
        letter-spacing: -1px;
    }
`

export const HighlightText = styled("span")`
    font-weight: 700;
    font-size: 54px;
    color: #1CB647;
    line-height: .95;
    letter-spacing: -2.43px;
    @media (max-width: 1024px) {
        font-size: 24px;
        letter-spacing: -1px;
    }
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
    @media (max-width: 1024px) {
        left: 0px;
        max-width: auto;
        padding-right: 16px;
    }
`