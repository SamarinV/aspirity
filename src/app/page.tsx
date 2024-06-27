"use client"
import iconArrowLeft from "@/assets/arrow-left.png"
import { AboutUser } from "@/components/AboutUser"
import { Header } from "@/components/Header"
import { Vacation } from "@/components/Vacation"
import { TabsTypeValue } from "@/types"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [tabValue, setTabValue] = useState<TabsTypeValue>("vacation")
  return (
    <div className="flex min-h-screen max-w-screen-2xl px-5 pb-6 flex-col mx-auto md:px-0">
      <Header />
      <main>
        <div className="inline-flex items-center my-2 py-2 px-4 rounded-sm hover:bg-dark-bg-modal cursor-pointer transition-all">
          <Image src={iconArrowLeft} alt="icon" />
          <span className="text-body2 text-dark-text-tertiary ml-2">ВЕРНУТЬСЯ К СОТРУДНИКАМ</span>
        </div>

        <div className="flex flex-col">
          <section className="bg-dark-bg-secondary p-10 mb-4 rounded-2xl lg:p-6">
            <AboutUser tabValue={tabValue} setTabValue={setTabValue} />
          </section>
          {tabValue === "vacation" && <Vacation />}
        </div>
      </main>
    </div>
  )
}
