import Layout from "../components/Layout"
import HeroSection from "../components/Homepage/HeroSection"
import AboutUs from "../components/Homepage/AboutUs"
import Team from "../components/Homepage/Team"
import MentorshipCouncil from "../components/Homepage/MentorshipCouncil"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutUs />
      <Team />
      <MentorshipCouncil />
    </Layout>
  )
}
