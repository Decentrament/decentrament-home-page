import Image from "next/image"

const Team = () => {
  return (
    <section className="my-20 py-5 text-center">
      <h2 className="text-brand-3 mb-8">Decentrament Team</h2>
      <div className="flex gap-6 justify-center">
        <div className="p-5">
          <Image
            src="/images/Ahmad.jpeg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-lg">Ahmad</p>
        </div>
        <div className="p-5">
          <Image
            src="/images/Michael.jpeg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-lg">Michael</p>
        </div>
        <div className="p-5">
          <Image
            src="/images/Tommy.jpeg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-lg">Tommy</p>
        </div>
        <div className="p-5">
          <Image
            src="/images/Paolo.jpeg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-lg">Paolo</p>
        </div>
      </div>
    </section>
  )
}

export default Team
