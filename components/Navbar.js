import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="content-container flex justify-between">
      <Link href="/">
        <a>
          <Image
            src="/images/logo.png"
            alt="Decentrament logo"
            width={50}
            height={50}
          />
        </a>
      </Link>

      <div className="flex items-center">
        <Link href="/">
          <a className="navlink">Home</a>
        </Link>
        <Link href="/">
          <a className="navlink ml-10">Docs</a>
        </Link>
        <Link href="/">
          <a className="nav-button ml-10">App</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
