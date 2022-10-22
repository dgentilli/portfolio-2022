import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import Card from './components/card/Card';
import ExperienceList from './components/experienceList/ExperienceList';

import { cardData } from './data/cardData';
import { sectionTypes } from './enums';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Section title='Client Projects' sectionType={sectionTypes.LIGHT}>
        {cardData.map((item) => (
          <Card
            cardTitle={item.cardTitle}
            job={item.job}
            period={item.period}
            description={item.description}
          />
        ))}
      </Section>
      <Section title='Previous Experience' sectionType={sectionTypes.DARK}>
        <ExperienceList />
      </Section>
    </div>
  );
}

export default App;
