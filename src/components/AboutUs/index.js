import { Section, TopSection, BottomSection, Heading, Summary, Text, HighlightText, Description, BannerImg } from "./styles"
import bannerImg from '@/images/about-us-banner.png'
import FadeInSection from "../FadeInSection"

function AboutUs() {
    return (
        <Section>
            <FadeInSection>
                <TopSection>
                    <Heading>About Us</Heading>
                    <BannerImg src={bannerImg} alt="about us banner" />
                </TopSection>
            </FadeInSection>
            <FadeInSection>
                <BottomSection>
                    <Summary>
                        <Text>RMS is a </Text>&nbsp;<HighlightText>media conglomerate </HighlightText>&nbsp;
                        <Text>that specializes in </Text><HighlightText>sales <br/>and marketing solutions </HighlightText>
                        <Text>within the advertising industry.</Text>
                    </Summary>
                    <Description>
                        We provide cutting-edge advertising opportunities across a variety of platforms throughout the MENA region, leveraging our expertise to offer the latest innovative solutions. Our areas of focus encompasses advertising sales representation for prominent satellite TV channels, digital media sales, and social media partnerships, content creation and integration, influencer marketing, and out-of-home media. We have a dedicated team of 58 professionals, and the company services its clients through a network of offices and representatives across the MENA region.
                    </Description>
                </BottomSection>
            </FadeInSection>
        </Section>
    )
}

export default AboutUs