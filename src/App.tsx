import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Planos } from "./sections/Planos";
import { Demonstracao } from "./sections/Demonstracao";
import { Solucoes } from "./sections/Solucoes";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Demonstracao />
        <Solucoes />
        <Planos />
      </main>
    </>
  );
}

export default App;
