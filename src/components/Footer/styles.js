import { styled, css } from "styled-components";
import Image from 'next/image'

export const Section = styled("div")`
    background: #fff;
`

export const Heading = styled("p")`
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    line-height: 133.6%;
    letter-spacing: -0.32px;
`


export const TopContainer = styled("div")`
    padding: 110px 0px 64px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        padding: 48px 0px 16px;
    }
`

export const Container = styled("div")`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 0px 16px;
    }
`

export const InputContainer = styled("div")`
    flex: 1;
`

export const InputTitle = styled("p")`
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: .95;
    letter-spacing: -0.72px;
    margin-bottom: 28px;
`

export const Input = styled("input")`
    color: #000;
    font-size: 36px;
    font-weight: 700;
    line-height: .95;
    letter-spacing: -0.72px;
    border: none;
    border-bottom: 1px solid #C9C9C9;
    padding-right: 40px;
    width: 100%;
    outline: none;
    &::placeholder {
        color: #CFCFCF;
        font-size: 36px;
        font-weight: 700;
        line-height: .95;
        letter-spacing: -1.08px;
    }
    @media (max-width: 1024px) {
        font-size: 20px;
        &::placeholder {
            font-size: 20px;
        }
    }
`

export const InputWrapper = styled("div")`
    position: relative;
`


export const InputIcon = styled(Image)`
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0px;
    cursor: pointer;
    @media (max-width: 1024px) {
        width: 24px;
        height: 24px;
    }
`

export const ImgContainer = styled("div")`
    width: 20%;
`

export const Logo = styled(Image)`
    width: 170px;
    height: 89px;
    margin-right: 136px;
`


export const LinksWrap = styled("div")`
    display: flex;
`

export const Links = styled("div")`
    display: flex;
    flex-direction: column;
    margin-right: 32px;
`

export const LinkSectionTitle = styled("p")`
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: .95;
    letter-spacing: -0.4px;
    margin-bottom: 43px;
    @media (max-width: 1024px) {
        margin-bottom: 24px;
    }
`

export const Link = styled("a")`
    color: #000;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.3px;
    margin-bottom: 12px;

`


export const LinkSection = styled("div")`
    margin-top: 105px;
    &:last-of-type {
        padding-right: 0px;
        ${LinkSectionTitle}, ${Link}: {
            text-align: right;
        }
    }
    @media (max-width: 1024px) {
        margin-top: 48px;
    }
`


export const BottomContainer = styled("div")`
    border-top: 1px solid #CECECE;
    padding: 16px 0px 78px;
    @media (max-width: 1024px) {
        padding: 16px 0px 24px;
    }

`

const bottomText = css`
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.26px;
`

export const Rightstext = styled("p")`
    ${bottomText};
    flex: 1;
    @media (max-width: 1024px) {
        margin-bottom: 8px;
    }
`


export const BottomLinkContainer = styled("div")`
    display: flex;
    flex: 1;

`

export const BottomLink = styled("a")`
    ${bottomText};
    margin-right: 32px;
`