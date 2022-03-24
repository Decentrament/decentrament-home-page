import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="grid grid-cols-2 gap-12 min-h-[500px]">
      <div className="flex flex-col justify-center">
        <h1 className="text-brand-3 mb-6">Decentrament</h1>
        <p className="text-lg mb-10">
          Introducing Decentrament, a game changer. The first fully
          Decentralized Autonomous Venture Capital, owned by the community, to
          support early Web3 projects.
        </p>
        <div className="flex">
          <button className="button-secondary mr-5">Learn more</button>
          <button className="button">Join us</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/Illustration-1.png"
          alt="Hero illustration"
          width={1200}
          height={900}
        />
      </div>
    </section>
  )
}

export default HeroSection
