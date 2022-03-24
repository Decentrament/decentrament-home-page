import { SocialIcon } from "react-social-icons"

const SocialIcons = ({ twitter, linkedin, discord, telegram }) => {
  return (
    <div className="flex justify-center items-center gap-5">
      {twitter && (
        <SocialIcon
          url={twitter}
          target="_blank"
          bgColor="transparent"
          fgColor="white"
          style={{ height: 40, width: 40 }}
          className="transition-effect hover:scale-125"
        />
      )}
      {linkedin && (
        <SocialIcon
          url={linkedin}
          target="_blank"
          bgColor="transparent"
          fgColor="white"
          style={{ height: 46, width: 46 }}
          className="transition-effect hover:scale-125"
        />
      )}
      {discord && (
        <SocialIcon
          url={discord}
          target="_blank"
          bgColor="white"
          style={{ height: 20, width: 20 }}
          className="transition-effect hover:scale-125"
        />
      )}
      {telegram && (
        <SocialIcon
          url={telegram}
          target="_blank"
          bgColor="transparent"
          fgColor="white"
          style={{ height: 30, width: 30 }}
          className="transition-effect hover:scale-125"
        />
      )}
    </div>
  )
}

export default SocialIcons
