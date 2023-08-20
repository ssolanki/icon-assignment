import { Section, Heading, Info, SpecialitySection, Speciality } from "./styles"
import FadeInSection from "../FadeInSection"

function WhyUs() {
    return (
        <FadeInSection>
            <Section>
                <Heading>Why RMS</Heading>
                <Info>Provides industry expertise, access to resources, <br/>
                    negotiation skills, in executing effective advertising <br/>campaigns.
                </Info>
                <SpecialitySection>
                    <Speciality>Integrated <br/>team</Speciality>
                    <Speciality>Industry <br/>Experience</Speciality>
                    <Speciality>Technical <br/>Knowledge</Speciality>
                    <Speciality>Direct Prior <br/>Experience</Speciality>
                    <Speciality>Global <br/>Resources</Speciality>
                    <Speciality>Readiness <br/>to act</Speciality>
                </SpecialitySection>
            </Section>
        </FadeInSection>
    )
}

export default WhyUs