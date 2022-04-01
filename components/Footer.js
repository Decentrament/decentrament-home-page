import { SocialIcon } from "react-social-icons"

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-t border-white/50 mt-6"
    >
      <div className="content-container py-8 px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="pt-8 lg:flex lg:items-center lg:justify-between md:gap-10 xl:mt-0">
          <div>
            <h3 className="text-sm font-semibold text-brand-3 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:justify-center lg:mt-0 max-w-md w-full mx-auto lg:mx-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="max-w-full md:max-w-[160px] bg-brand-1"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center items-center gap-5">
            <SocialIcon
              url="https://twitter.com/decentrament?s=20&t=wmncy2q-hS3x5W80cvEeVw"
              target="_blank"
              bgColor="transparent"
              fgColor="white"
              style={{ height: 40, width: 40 }}
              className="transition-effect hover:scale-125"
            />
            <SocialIcon
              url="https://discord.gg/ECuAtndT"
              target="_blank"
              bgColor="white"
              style={{ height: 20, width: 20 }}
              className="transition-effect hover:scale-125"
            />
          </div>
          <p className="mt-8 text-sm md:mt-0 md:order-1">
            &copy;{" "}
            {`${new Date().getFullYear()} Decentrament, Inc. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
