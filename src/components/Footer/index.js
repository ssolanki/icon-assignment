import { Section, Container, TopContainer, Logo, InputContainer, InputTitle, Input, InputWrapper, InputIcon, LinkSection, Links, LinksWrap, LinkSectionTitle, Link, BottomContainer, Rightstext, BottomLinkContainer, BottomLink } from "./styles"
import footerLogo from '@/images/footer-logo.png'
import sendIcon from '@/images/icon-top-right.png'

function Footer() {
    
    return (
        <Section>
            <TopContainer>
                <Container>
                    <Logo src={footerLogo} alt="logo" />
                    <InputContainer>
                        <InputTitle>Stay up to Date</InputTitle>
                        <InputWrapper>
                            <Input placeholder="Enter your email address"></Input>
                            <InputIcon src={sendIcon} alt="send icon"/>
                        </InputWrapper>
                    </InputContainer>
                </Container>
                <Container style={{justifyContent: "space-between"}}>
                    <LinkSection>
                        <LinkSectionTitle> Quick Links </LinkSectionTitle>
                        <LinksWrap>
                            <Links>
                                <Link href="#">About Us</Link>
                                <Link href="#">Partners</Link>
                                <Link href="#">Clients</Link>
                                <Link href="#">Careers</Link>
                            </Links>
                            <Links>
                                <Link href="#">Media Centre</Link>
                                <Link href="#">Contact Us</Link>
                            </Links>
                        </LinksWrap>
                    </LinkSection>
                    <LinkSection>
                        <LinkSectionTitle> Our Solutions </LinkSectionTitle>
                        <LinksWrap>
                            <Links>
                                <Link href="#">Traditional Media</Link>
                                <Link href="#">Digital Media </Link>
                                <Link href="#">Influencer Media</Link>
                                <Link href="#">Outdoor Media</Link>
                            </Links>
                            <Links>
                                <Link href="#">OTT Advertising</Link>
                                <Link href="#">Partnership</Link>
                            </Links>
                        </LinksWrap>
                    </LinkSection>
                    <LinkSection>
                        <LinkSectionTitle> Connect with Us </LinkSectionTitle>
                        <LinksWrap>
                            <Links>
                                <Link href="#">Facebook</Link>
                                <Link href="#"> Instagram </Link>
                                <Link href="#">Youtube</Link>
                                <Link href="#"> Linkedin</Link>
                            </Links>
                        </LinksWrap>
                    </LinkSection>
                </Container>
            </TopContainer>
            <BottomContainer>
                <Container>
                    <Rightstext>
                        All right Reserverd. Rotana Media Services
                    </Rightstext>
                    <BottomLinkContainer>

                        <BottomLink href="#">Privacy Policy </BottomLink>
                        <BottomLink href="#">Terms & Conditions</BottomLink>
                    </BottomLinkContainer>
                </Container>
            </BottomContainer>
        </Section>
    )
}

export default Footer