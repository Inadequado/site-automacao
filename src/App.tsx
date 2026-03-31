import { Header } from "./components/Header";
import { Carrocel } from "./sections/Demonstração/Carrocel";
import { Hero } from "./sections/Hero";
import { Planos } from "./sections/Planos";
import { Solucoes } from "./sections/Solucoes";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Carrocel />
        <Planos />
        <Solucoes />
      </main>
    </>
  );
}

export default App;
