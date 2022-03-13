import Link from "next/link"

const Navbar = () => {
  return (
    <div className="content-container flex justify-between">
      <h3 className="text-brand-2">D</h3>
      <div className="flex items-center">
        <Link href="#">
          <a className="navlink">Home</a>
        </Link>
        <Link href="#">
          <a className="navlink ml-10 cursor-default">Docs</a>
        </Link>
        <Link href="#">
          <a className="nav-button ml-10">App</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
