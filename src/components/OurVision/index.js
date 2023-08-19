import { useRef, useEffect, useState } from "react"
import { Section, Heading, CardsContainer, LeftImg, CenterImg, RightImg, Content } from "./styles"
import leftImg from '@/images/our-vision-1.jpeg'
import rightImg from '@/images/our-vision-2.jpeg'
import useIntersection from './useIntersection'

function OurVision() {
    const [isFixed, setIsFixed] = useState(false)
    const innerRef = useRef(null)
    const bgRef = useRef(null)
    const scrollY = typeof window !== "undefined" ? window?.scrollY: 0

    const inViewport = useIntersection(innerRef, typeof window !== "undefined" ? `-${window?.innerHeight/2}px`: '0px'); // Trigger as soon as the element becomes visible
    console.log(inViewport)
    useEffect(() => {

    }, [inViewport])

    return (
        <Section ref={innerRef}>
            <Heading ref={bgRef}>Our Vision</Heading>
            <CardsContainer>
                <LeftImg src={leftImg} alt="left img" />
                <CenterImg>
                    <Content>To help brands <br/>maximize and optimize their MENA reach, especially in key markets like Saudi Arabia and Egypt</Content>
                </CenterImg>
                <RightImg src={rightImg} alt="right img" />
            </CardsContainer>
        </Section>
    )
}

export default OurVision