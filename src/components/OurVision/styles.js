import { styled, css } from "styled-components";
import Image from 'next/image'

export const Section = styled("div")`
    padding: 205px 152px 231px 90px;
    position: relative;
    @media (max-width: 1024px) {
        padding: 60px 20px 60px 20px;
    }
`

export const Heading = styled("p")`
    font-size: 220px;
    font-weight: 700;
    line-height: 1.07;
    letter-spacing: -9.9px;
    background: linear-gradient(180deg, #EFEFEF 0%, rgba(239, 239, 239, 0.00) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
    position: absolute;
    top: calc(50vh - 115px);
    left: 20%;
    ${({ isFixed }) => isFixed && css`
        position: fixed;
    `}
    @media (max-width: 1024px) {
        font-size: 64px;
        letter-spacing: -2px;
        top: calc(50vh - 34px);
        text-align: center;
        left: 0;
        transform: translateX(-50%);
        left: 50%;
        width: 100%;
    }
`

export const CardsContainer = styled("div")`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`

export const LeftImg = styled(Image)`
    width: 420px;
    height: 512px;
    border-radius: 24px;
    z-index: 0;
    margin-top: 50vh;
    height: auto;
    max-width: 100%;
    @media (max-width: 1024px) {
        margin-top: 80vh;
    }
`

export const RightImg = styled(Image)`
    width: 312px;
    height: 385px;
    margin-top: calc(50vh + 168px);
    border-radius: 24px;
    z-index: 0;
    height: auto;
    max-width: 100%;
    @media (max-width: 1024px) {
        margin-top: 0px;
    }
`

export const CenterImg = styled("div")`
    border-radius: 24px;
    border: 1px solid #164924;
    background: #000;
    padding: 75px 45px;
    margin: 0px 97px 0px 139px;
    margin-top: calc(50vh + 380px);
    z-index: 2;
    @media (max-width: 1024px) {
        margin-top: 0px;
        padding: 32px 20px;
        margin: 40px 0px;
    }
`

export const Content = styled("p")`
    color: #EFEFEF;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.13
    letter-spacing: -1.28px;
    @media (max-width: 1024px) {
        font-size: 20px;
    }
`