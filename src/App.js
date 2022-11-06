import React, { useState } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import CardList from './components/cardList/CardList';
import ExperienceList from './components/experienceList/ExperienceList';
import Background from './components/backgroundDetails/Background';
import Info from './components/info/Info';
import Footer from './footer/Footer';
import MenuModal from './components/modal/MenuModal';
import { sectionTypes, sectionTitles } from './enums';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='App'>
      {isModalOpen && <MenuModal setIsOpen={setIsModalOpen} />}
      <Navbar setIsOpen={setIsModalOpen} />
      <Header />
      <Section
        title={sectionTitles.CLIENT_PROJECTS}
        sectionType={sectionTypes.LIGHT}
      >
        <CardList />
      </Section>
      <Section
        title={sectionTitles.PREVIOUS_EXPERIENCE}
        sectionType={sectionTypes.DARK}
      >
        <ExperienceList />
      </Section>
      <Section
        title={sectionTitles.BACKGROUND}
        sectionType={sectionTypes.LIGHT}
      >
        <Background />
      </Section>
      <Section title={sectionTitles.INFO} sectionType={sectionTypes.GRADIENT}>
        <Info />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
