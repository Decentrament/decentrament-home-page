import Layout from "../components/Layout"
import HeroSection from "../components/Homepage/HeroSection"

export default function Home() {
  return (
    <Layout>
      <div className="content-container">
        <HeroSection />
      </div>
    </Layout>
  )
}
