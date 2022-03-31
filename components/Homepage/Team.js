import Image from "next/image"
import SocialIcons from "./SocialIcons"

const Team = () => {
  return (
    <section className="my-28 py-5 text-center">
      <h2 className="text-brand-3 mb-12">Decentrament Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-5">
          <Image
            src="/images/Ahmad.jpeg"
            alt="Image of Ahmad"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <SocialIcons
            twitter="https://twitter.com/Mardeni01"
            linkedin="https://www.linkedin.com/in/ahmad-mardeni-369b3019b"
            discord="https://discordapp.com/users/694271038007017592"
            telegram="https://telegram.me/AhmadMardeni"
          />
          <p className="mt-2 text-lg text-brand-3 font-semibold">Ahmad</p>
        </div>
        <div className="p-5">
          <Image
            src="/images/Michael.jpeg"
            alt="Image of Michael"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <SocialIcons
            twitter="https://twitter.com/SnowspeederGRT"
            discord="https://discordapp.com/users/790373966903640074"
            telegram="https://telegram.me/SnowspeederGRT"
          />
          <p className="mt-2 text-lg text-brand-3 font-semibold">Michael</p>
        </div>
        <div className="p-5">
          <Image
            src="/images/Tommy.jpeg"
            alt="Image of Tommy"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <SocialIcons
            twitter="https://twitter.com/0xTomster"
            discord="https://discordapp.com/users/617471202058829875"
          />
          <p className="mt-2 text-lg text-brand-3 font-semibold">Tommy</p>
        </div>
        <div className="p-5">
          <div className="relative">
            <Image
              src="/images/Paolo.jpeg"
              alt="Image of Ahmad"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <SocialIcons
              twitter="https://twitter.com/pdiomede"
              linkedin="https://www.linkedin.com/in/pdiomede"
              discord="https://discordapp.com/users/841311304714813484"
              telegram="https://telegram.me/hornelson"
            />
          </div>
          <p className="mt-2 text-lg text-brand-3 font-semibold">Paolo</p>
        </div>
      </div>
    </section>
  )
}

export default Team
