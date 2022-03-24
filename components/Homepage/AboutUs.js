import Image from "next/image"

const AboutUs = () => {
  return (
    <section className="my-24 flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-12 mb-14 py-5">
        <div className="flex justify-center items-center">
          <Image
            src="/images/Illustration-2.png"
            alt="Hero illustration"
            width={1200}
            height={900}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-brand-3 mb-3">Our Mission</h2>
          <p className="text-lg mb-6">
            Decentrament is an initiative to solve the biggest problem web3 is
            currently facing, which is centralized VCs owning a huge part of
            web3 protocols. Our vision is to build a DAO to support and fund
            early web3 projects and help them to build successful solutions.
          </p>
          <p className="text-lg">
            What is decentralization when we are just making VCs richer?
            Let&apos;s give users the control back.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 py-5">
        <div className="flex flex-col justify-center">
          <h2 className="text-brand-3 mb-3">Our Investment Focus</h2>
          <p className="text-lg">
            We only invest in web3 ideas. Some examples are but not limited to:
            DeFi protocols, and NFTs marketplaces. Actually, we invest in any
            idea that solves a real problem in the web3 space. You just need to
            BUIDL.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/Illustration-3.png"
            alt="Hero illustration"
            width={1200}
            height={900}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
