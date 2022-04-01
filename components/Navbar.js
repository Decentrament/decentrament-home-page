import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="border-b border-white/50 py-0">
      <div className="content-container flex justify-between">
        <Link href="/">
          <a className="flex items-center w-10 sm:w-12">
            <Image
              src="/images/logo.png"
              alt="Decentrament logo"
              width={50}
              height={50}
            />
          </a>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="navlink">Home</a>
          </Link>
          <Link href="/">
            <a className="navlink">Docs</a>
          </Link>
          <Link href="/">
            <a className="nav-button">App</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
