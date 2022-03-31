import Layout from "../components/Layout"
import HeroSection from "../components/Homepage/HeroSection"
import AboutUs from "../components/Homepage/AboutUs"
import Team from "../components/Homepage/Team"
import MembershipCouncil from "../components/Homepage/MembershipCouncil"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutUs />
      <Team />
      <MembershipCouncil />
    </Layout>
  )
}
