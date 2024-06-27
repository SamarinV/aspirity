import Avatar from "@/components/Avatar/Avatar"
import imageAvatar from "@/assets/avatar.jpg"
import { user } from "@/mockData/mockData"
import { Dispatch, SetStateAction } from "react"

export type TabsTypeValue = "mainInfo" | "vacation" | "equipment"

type Tabs = {
  value: string
  type: TabsTypeValue
}

type Props = {
  tabValue: TabsTypeValue
  setTabValue: Dispatch<SetStateAction<TabsTypeValue>>
}

const AboutUser = ({ tabValue, setTabValue }: Props) => {
  const tabs: Tabs[] = [
    { value: "ОСНОВНАЯ ИНФОРМАЦИЯ", type: "mainInfo" },
    { value: "ОТПУСК", type: "vacation" },
    { value: "ОБОРУДОВАНИЕ", type: "equipment" },
  ]
  return (
    <>
      <div className="flex">
        <Avatar size={160} url={imageAvatar} />
        <div className="flex flex-col pl-12 py-6 justify-between">
          <h2 className="text-custom-headline">{user.surname}</h2>
          <h2 className="text-custom-headline">
            {user.name} {user.patronymic}
          </h2>
        </div>
      </div>
      <div className="ml-52 mt-2">
        <p className="text-subtitle1 ">{user.profession}</p>
        <p className="mt-4 text-subtitle1 ">
          {user.location.city}, {user.location.country}{" "}
          <span className="text-dark-text-tertiary">• {user.visitingTime}</span>
        </p>
      </div>
      <div className="flex mt-12">
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

export default AboutUser
