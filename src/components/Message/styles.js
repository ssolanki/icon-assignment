import { styled } from "styled-components";
import Image from 'next/image'

export const Section = styled("div")`
    padding: 219px 0px;
    display: flex;
    justify-content: center;
`

export const Container = styled("div")`
    position: relative;
    left: -24px;
`


export const Heading = styled("p")`
    color: #1CB647;
    font-size: 24px;
    font-weight: 700;
    line-height: .94;
    letter-spacing: -1.08px;
    margin-bottom: 62px;
`

export const Info = styled("p")`
    color: #FFF;
    font-size: 54px;
    font-weight: 700;
    line-height: .92;
    letter-spacing: -1.89px;
    margin-bottom: 48px;
    max-width: 777px;
`

export const BottomSection = styled("div")`
    display: flex;
`

export const Img = styled(Image)`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    margin-right: 20px;
`

export const Name = styled("p")`
    color: #EFEFEF;
    font-size: 18px;
    font-weight: 700;
    line-height: .73;
    letter-spacing: -0.81px;
    margin-top: 12px;
`

export const Designation = styled("p")`
    color: #505050;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: .73;
    margin-top: 8px;
`