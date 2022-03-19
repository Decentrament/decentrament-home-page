import Layout from "../components/Layout"
import HeroSection from "../components/Homepage/HeroSection"
import AboutUs from "../components/Homepage/AboutUs"
import Team from "../components/Homepage/Team"

export default function Home() {
  return (
    <Layout>
      <main className="content-container">
        <HeroSection />
        <AboutUs />
        <Team />
      </main>
    </Layout>
  )
}
