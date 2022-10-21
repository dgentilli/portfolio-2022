import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import Card from './components/card/Card';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Section title='Client Projects' modifierClass='section__dark'>
        <Card />
        <Card />
        <Card />
        <Card />
      </Section>
    </div>
  );
}

export default App;
