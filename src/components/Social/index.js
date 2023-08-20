import { Section, Container, TopContainer, Heading, ImgContainer, Img, SocialImg } from "./styles"
import instaLogo from '@/images/instagram-icon.png'
import footerImg1 from '@/images/footer-img-1.png'
import footerImg2 from '@/images/footer-img-2.png'
import footerImg3 from '@/images/footer-img-3.png'
import footerImg4 from '@/images/footer-img-4.png'
import footerImg5 from '@/images/footer-img-5.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import FadeInSection from "../FadeInSection"

function Social() {
    return (
        <FadeInSection>
            <Section>
                <TopContainer>
                    <SocialImg src={instaLogo} alt="insta" />
                    <Heading>@rotanamedia</Heading>
                </TopContainer>
                <Container>
                    <ImgContainer>
                        <Img src={footerImg1} ></Img>
                    </ImgContainer>
                    <ImgContainer>
                        <Img src={footerImg2} ></Img>
                    </ImgContainer>
                    <ImgContainer>
                        <Img src={footerImg3} ></Img>
                    </ImgContainer>
                    <ImgContainer>
                        <Img src={footerImg4} ></Img>
                    </ImgContainer>
                    <ImgContainer>
                        <Img src={footerImg5} ></Img>
                    </ImgContainer>
                </Container>
            </Section>
        </FadeInSection>
    )
}

export default Social