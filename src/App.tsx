import { Chip, Features, Footer, Hero, Highlights, Model, Navbar } from './components';

const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <Chip />
        <Footer />
      </main>
    </>
  );
};

export default App;
