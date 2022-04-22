import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="content-container flex justify-between">
      <Link href="/">
        <a className="flex items-center w-10 sm:w-12">
          <img src="/images/logo.png" alt="Decentrament logo" />
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
    </nav>
  )
}

export default Navbar
