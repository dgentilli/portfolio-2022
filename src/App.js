import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import Card from './components/card/Card';

import { cardData } from './data/cardData';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Section title='Client Projects' sectionType='light'>
        {cardData.map((item) => (
          <Card
            cardTitle={item.cardTitle}
            job={item.job}
            period={item.period}
            description={item.description}
          />
        ))}
      </Section>
    </div>
  );
}

export default App;
