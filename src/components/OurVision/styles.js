import { styled, css } from "styled-components";
import Image from 'next/image'

export const Section = styled("div")`
    padding: 205px 152px 231px 90px;
    position: relative;
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
`

export const CardsContainer = styled("div")`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
`

export const LeftImg = styled(Image)`
    width: 420px;
    height: 512px;
    border-radius: 24px;
    z-index: 0;
    margin-top: 50vh;
`

export const RightImg = styled(Image)`
    width: 312px;
    height: 385px;
    margin-top: calc(50vh + 168px);
    border-radius: 24px;
    z-index: 0;
`

export const CenterImg = styled("div")`
    border-radius: 24px;
    border: 1px solid #164924;
    background: #000;
    padding: 75px 45px;
    margin: 0px 97px 0px 139px;
    margin-top: calc(50vh + 380px);
    z-index: 2;
`

export const Content = styled("p")`
    color: #EFEFEF;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.13
    letter-spacing: -1.28px;
`