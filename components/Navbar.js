import Link from "next/link"

const Navbar = () => {
  return (
    <div className="content-container flex justify-between">
      <Link href="/">
        <a className="text-brand-1 text-2xl font-bold">D</a>
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
