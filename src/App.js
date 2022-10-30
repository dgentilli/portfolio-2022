import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import Card from './components/card/Card';
import ExperienceList from './components/experienceList/ExperienceList';
import Background from './components/backgroundDetails/Background';
import Info from './components/info/Info';
import Footer from './footer/Footer';

import { cardData } from './data/cardData';
import { sectionTypes, sectionTitles } from './enums';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Section
        title={sectionTitles.CLIENT_PROJECTS}
        sectionType={sectionTypes.LIGHT}
      >
        {cardData.map((item) => (
          <Card
            cardTitle={item.cardTitle}
            job={item.job}
            period={item.period}
            description={item.description}
            key={item.cardTitle}
          />
        ))}
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
