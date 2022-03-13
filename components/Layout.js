import Head from "next/head"

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className="bg-darkblue min-h-screen text-white font-main">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: "Decentrament | Decentralized Autonomous Venture Capital",
  description:
    "Our vision is to decentralize the world. We invest early and we help teams to build the next cutting-edge technologies in the Web3 space.",
  keywords:
    "blockchain, dao, investing, decentrament, web3, vc, venture capital",
}

export default Layout