import { styled } from "styled-components";

export const Section = styled("div")`
    padding: 40px 201px 309px 201px;
    @media (max-width: 1024px) {
        padding: 16px 16px 120px 16px;
    }
`

export const Heading = styled("p")`
    color: #1CB647;
    font-size: 24px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: -1px;
    margin-bottom: 8px;
    @media (max-width: 1024px) {
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
    }
`

export const Info = styled("p")`
    color: #EFEFEF;
    font-size: 80px;
    font-weight: 700;
    line-height: .95;
    letter-spacing: -3.6px;
    margin-bottom: 147px;
    max-width: 85%;
    @media (max-width: 1024px) {
        max-width: 100%;
        font-size: 32px;
        letter-spacing: -1px;
        margin-bottom: 80px;
    }
`


export const SpecialitySection = styled("div")`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Speciality = styled("p")`
    color: #EFEFEF;
    font-size: 24px;
    font-weight: 700;
    line-height: .92;
    margin-bottom: 16px;
    margin-right: 16px;
    @media (max-width: 1024px) {
        font-size: 14px;
    }
`

