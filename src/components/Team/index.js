import { Section, TeamContainer, Heading, Slide, Img, Name, Designation } from "./styles"
import Slider from "react-slick";
import personImg1 from '@/images/person-1.jpeg'
import personImg2 from '@/images/person-2.jpeg'
import personImg3 from '@/images/person-3.jpeg'
import personImg4 from '@/images/person-4.jpeg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Team() {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
        // infinite: false,
        // speed: 500,
        // slidesToShow: 4,
        // slidesToScroll: 4,
        // initialSlide: 0,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
      }
    return (
        <Section>
            <Heading>Meet the team</Heading>
            <TeamContainer>
                <Slider {...settings}>
                    <Slide>
                        <Img src={personImg1} ></Img>
                        <Name>Alexander Zhestkov </Name>
                        <Designation>Design Director</Designation>
                    </Slide>
                    <Slide>
                        <Img src={personImg2} ></Img>
                        <Name>Alexander Zhestkov </Name>
                        <Designation>Design Director</Designation>
                    </Slide>
                    <Slide>
                        <Img src={personImg3} ></Img>
                        <Name>Alexander Zhestkov </Name>
                        <Designation>Design Director</Designation>
                    </Slide>
                    <Slide>
                        <Img src={personImg4} ></Img>
                        <Name>Alexander Zhestkov </Name>
                        <Designation>Design Director</Designation>
                    </Slide>
               </Slider>
            </TeamContainer>
        </Section>
    )
}

export default Team