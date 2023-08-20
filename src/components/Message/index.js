import { Section, Container, Heading, Info, BottomSection, Img, Name, Designation } from "./styles"
import personImg1 from '@/images/person-1.jpeg'
import FadeInSection from "../FadeInSection"

function Message() {
    return (
        <FadeInSection>
            <Section>
                <Container>

                    <Heading>Message form the chairman</Heading>
                    <Info>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </Info>
                    <BottomSection>
                        <Img src={personImg1} alt="img logo"/>
                        <div>
                            <Name>Alexander Zhestkov </Name>
                            <Designation>Design Director</Designation>
                        </div>
                    </BottomSection>
                </Container>
        </Section>
        </FadeInSection>

    )
}

export default Message