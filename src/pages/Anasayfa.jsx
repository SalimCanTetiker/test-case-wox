import Box from "../components/Box"
import Header from "../components/Header"
import List from "../components/List"
import Option from "../components/Option"
import Search from "../components/Search"

import { Bell, Tv, MessageCircle } from "lucide-react"

const Anasayfa = () => {
  return (
    <div className=' bg-[#f7f7f7] flex-1 overflow-auto relative'>
      <div className="bg-[#ededed] w-full h-20">
        <div className="flex justify-end">
          <Search />
          <Box title={"Bildirimler"} icon={<Bell />} />
          <Box title={"Panel Chat"} icon={<MessageCircle />} />
          <Box title={"Extra tv"} icon={<Tv />} />
        </div>
      </div>
      <Header title={'Yeni Rezervasyon'} />
      <div className="border-8 p-1 m-1 bg-[#ffffff] text-black">
        <div>NG Afyon Wellness & Convention</div>
        <div className="flex flex-row justify-start m-1 p-1">
          <Option />
          <List />
        </div>
      </div>
    </div>
  )
}

export default Anasayfa