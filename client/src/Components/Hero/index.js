import React, {useState} from 'react';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroBtn, HeroP } from '../Hero/HeroElements';
import Navbar from '../Navbar';
import Sidebar from '../SideBar';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen( !isOpen )
  }

  return (
<HeroContainer>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <HeroContent>
        <HeroItems>
            <HeroH1>lorem</HeroH1>
            <HeroP>lorem</HeroP>
            <HeroBtn>click here</HeroBtn>
        </HeroItems>
    </HeroContent>
</HeroContainer>
  );
    };

export default Hero;