import { useRef, useEffect, useState } from "react"
import { Section, Heading, CardsContainer, LeftImg, CenterImg, RightImg, Content } from "./styles"
import leftImg from '@/images/our-vision-1.jpeg'
import rightImg from '@/images/our-vision-2.jpeg'
import useIntersection from './useIntersection'

function OurVision() {
    const [isFixed, setIsFixed] = useState(false)
    const [isContainerScrolled, setIsContainerScrolled] = useState(false)
    const innerRef = useRef(null)
    const bgRef = useRef(null)
    const inViewport = useIntersection(innerRef, '0px'); // Trigger as soon as the element becomes visible
    console.log(inViewport)

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    function onScroll() {
        const rect = innerRef.current.getBoundingClientRect()
        const yPosition = rect.y
        const bgHeight = bgRef.current.offsetHeight

        // optimisation
        if (yPosition > window.innerHeight || (- yPosition) > rect.height) {
            return
        }
        const triggerPoint = window.innerHeight/2 - bgHeight/2
        setIsFixed(yPosition < triggerPoint && yPosition < 0)
        setIsContainerScrolled(window.innerHeight/2 - rect.height > yPosition)
    }
    return (
        <Section ref={innerRef}>
            <Heading ref={bgRef} isFixed={isFixed && !isContainerScrolled}>Our Vision</Heading>
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