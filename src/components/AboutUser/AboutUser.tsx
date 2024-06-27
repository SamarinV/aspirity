import imageAvatar from "@/assets/avatar.jpg"
import { user } from "@/mockData/mockData"
import { TabsTypeValue } from "@/types"
import { Dispatch, SetStateAction } from "react"
import { Avatar } from "../Avatar"



type Tabs = {
  value: string
  type: TabsTypeValue
}

type Props = {
  tabValue: TabsTypeValue
  setTabValue: Dispatch<SetStateAction<TabsTypeValue>>
}

export const AboutUser = ({ tabValue, setTabValue }: Props) => {
  const tabs: Tabs[] = [
    { value: "ОСНОВНАЯ ИНФОРМАЦИЯ", type: "mainInfo" },
    { value: "ОТПУСК", type: "vacation" },
  ]
  return (
    <>
      <div className="flex md:flex-col items-center">
        <Avatar size={160} url={imageAvatar} />
        <div className="flex flex-col pl-12 py-6 justify-between text-custom-headline md:text-center md:p-0 md:mt-4 md:text-2xl">
          <h2>{user.surname}</h2>
          <h2>
            {user.name} {user.patronymic}
          </h2>
        </div>
      </div>
      <div className="ml-52 mt-2 text-subtitle1 md:mt-6 md:ml-0 md:text-center">
        <p className=" ">{user.profession}</p>
        <p className="mt-4 md:mt-6">
          {user.location.city}, {user.location.country}{" "}
          <span className="text-dark-text-tertiary">• {user.visitingTime}</span>
        </p>
      </div>
      <div className="flex mt-12 md:justify-center">
        {tabs.map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => setTabValue(item.type)}
              className={`text-body2 text-dark-text-secondary py-2 px-4 border-b-2 cursor-pointer hover:bg-dark-bg-modal transition-all ${
                tabValue === item.type ? "border-dark-border-accent font-semibold text-dark-text-primary" : ""
              }`}
            >
              {item.value}
            </p>
          )
        })}
      </div>
    </>
  )
}
