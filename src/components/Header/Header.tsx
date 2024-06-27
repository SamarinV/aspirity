import Image from "next/image"
import logo from "@/assets/logo.png"
import Avatar from "../Avatar/Avatar"
import iconAvatar from "@/assets/avatar.jpg"
import iconDown from "@/assets/arrow-down.png"
import iconBurger from "@/assets/burger.png"

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 md:py-7 md:px-4">
      <Image className="cursor-pointer" src={logo} alt="Aspirity" width={180} height={40} />
      <div className="grid grid-flow-col gap-2 items-center">
        <div className="flex py-2 px-4 border rounded-full border-dark-border-primary cursor-pointer hover:bg-dark-bg-modal">
          <Avatar size={24} url={iconAvatar} />
          <Image src={iconDown} alt="icon" />
        </div>
        <div className="cursor-pointer  hover:bg-dark-bg-modal h-10 w-10 flex items-center justify-center rounded-sm">
          <Image src={iconBurger} alt="menu" />
        </div>
      </div>
    </header>
  )
}

export default Header
