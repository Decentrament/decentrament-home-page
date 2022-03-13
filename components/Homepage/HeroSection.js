const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 gap-12 min-h-[500px]">
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl text-brand-1 mb-6">Decentrament</h1>
        <p className="max-w-md text-lg mb-10">
          Introducing Decentrament, a game changer. The first fully
          Decentralized Autonomous Venture Capital, owned by the community, to
          support early Web3 projects.
        </p>
        <div className="flex">
          <button className="button-secondary mr-5">Learn more</button>
          <button className="button">Join us</button>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-500 rounded">
        Placeholder for some illustration
      </div>
    </div>
  )
}

export default HeroSection
