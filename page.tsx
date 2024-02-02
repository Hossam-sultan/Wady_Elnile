import Hero from "./components/Hero"
import HorizontalScrolling from "./components/HorizontalScrolling"
import AllProducts from "./components/AllProducts"
import Services from "./components/Serveces"
import AllMachines from "./components/AllMachines"

export default function Home() {
  return (
    <main>
      <Hero />
      <HorizontalScrolling />
      <Services />
      <AllProducts />
      <AllMachines />
    </main>
  )
}
