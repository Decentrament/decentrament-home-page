const COUNCIL = [
  {
    name: "Abdulahi Mcghee",
    org: "The Graph",
    imageUrl: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
  },
  {
    name: "Dexter Berger",
    org: "Aave",
    imageUrl: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
  },
  {
    name: "Sophie Louise",
    org: "1kx Capital",
    imageUrl: "https://randomuser.me/api/portraits/thumb/women/68.jpg",
  },
  {
    name: "Janet Hebert",
    org: "The Graph",
    imageUrl: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
  },
  {
    name: "Kirby Cano",
    org: "Ethereum Foundation",
    imageUrl: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
  },
  {
    name: "Aya Martins",
    org: "The Graph",
    imageUrl: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
  },
]

const MentorshipCouncil = () => {
  return (
    <section className="my-20 py-5">
      <div className="border-2 rounded-2xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10 py-6 sm:py-8 md:py-14 px-6">
          <div className="flex items-center">
            <h2 className="text-center w-full md:mb-4 lg:mb-0 text-brand-3 leading-[1.3] md:leading-[1.1] tracking-wide">
              Meet our mentorship council
            </h2>
          </div>

          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              {COUNCIL.map((person) => (
                <li key={person.name} className="">
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img
                      className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-brand-3">{person.org}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MentorshipCouncil
