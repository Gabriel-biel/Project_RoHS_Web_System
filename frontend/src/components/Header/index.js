import React from 'react';

import logoRohs from '../../assets/rohs.png'
import user from '../../assets/gabygaby.png'
import brazilIcon from '../../assets/icons/brazil.png'
import languageIcon from '../../assets/icons/languageIcon.png'

import {
  Container,
  ImageContainer,
  RightSide,
  SelectLanguageContainer,
  CountryIcon,
  OptionsContainer,
  UserContainer,
} from './styles';

const Header = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={logoRohs} alt="Rohs Logo" />
      </ImageContainer>
      <RightSide>
        <SelectLanguageContainer>
          <CountryIcon>
            <img src={brazilIcon} alt="Brazil Icon" />
          </CountryIcon>
          <OptionsContainer>
            <select>
              <option value="portuguese">Português</option>
              <option value="english">English</option>
              <option value="chinese">Chinse</option>
            </select>
          </OptionsContainer>
          <img src={languageIcon} alt="Language Icon" />
        </SelectLanguageContainer>

        <UserContainer>
          <img src={user} alt="Profile Image" />
        </UserContainer>
      </RightSide>
    </Container>
  );
};

export default Header;
