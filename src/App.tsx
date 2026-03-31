import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Planos } from "./sections/Planos";
import { Solucoes } from "./sections/Solucoes";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solucoes />
        <Planos />
      </main>
    </>
  );
}

export default App;
