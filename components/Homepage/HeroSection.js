const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse text-center md:text-left md:grid md:grid-cols-2 gap-12 min-h-[500px]">
      <div className="flex flex-col justify-center">
        <h1 className="text-brand-3 mb-6">Decentrament</h1>
        <p className="mb-10">
          Introducing Decentrament, a game changer. The first fully
          Decentralized Autonomous Venture Capital, owned by the community, to
          support early Web3 projects.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
          <button className="button-secondary mx-auto sm:mx-0">
            Learn more
          </button>
          <button className="button mx-auto sm:mx-0">Join us</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src="/images/Illustration-1.png" alt="Hero illustration" />
      </div>
    </section>
  )
}

export default HeroSection
