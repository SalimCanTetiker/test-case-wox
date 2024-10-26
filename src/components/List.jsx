import { Baby, Mail, Map, PersonStanding, Phone, User } from "lucide-react"
import OptionButton from "./OptionButton"
import Dropdown from "./Dropdown"

const List = () => {
    return (
        <div className="overflow-hidden">
            <div className='flex items-center bg-[#f4f7fa] text-[#37495f] w-full h-10'>İletişim Bilgileri</div>
            <div className='flex flex-row p-2'>
                <div className='flex flex-ro border h-6 mx-4'>
                    <User size={18} />
                    <input
                        placeholder='İsim / Soyisim'
                    />
                </div>
                <div className='flex flex-ro border h-6 mx-4'>
                    <Phone size={18} />
                    <input
                        placeholder='Cep Telefonu'
                    />
                </div>
                <div className='flex flex-ro border'>
                    <Mail size={18} />
                    <input
                        placeholder='E-Posta Adresi'
                    />
                </div>
                <div className='flex flex-row border'>
                    <Map size={18} />
                    <input
                        placeholder='TC Kimlik Numarası'
                    />
                </div>
            </div>
            <div className='flex items-center bg-[#f4f7fa] text-[#37495f] w-full h-10'>Misafir Oda Bilgileri</div>
            <OptionButton choice={"1. Oda"} />
            <div className="flex flex-row w-40 p-4">
                <div>
                    <PersonStanding size={20} />
                </div>
                <Dropdown />
            </div>
            <div className="flex flex-row w-40 p-4">
                <div>
                    <Baby size={20} />
                </div>
                <Dropdown />
            </div>
            <OptionButton choice={"2. Oda"} />
            <OptionButton choice={"3. Oda"} />
            <OptionButton choice={"4. Oda"} />
            <div className='flex items-center bg-[#f4f7fa] text-[#37495f] w-full h-10'>Fatura Bilgileri</div>
            <div className="flex flex-row justify-start p-2">
                <div>Şahıs Adına</div>
                <OptionButton />
                <div>Şirket Adına</div>
                <OptionButton />
                <div>Yabancı Uyruklu Müşteri</div>
                <OptionButton />
            </div>
            <div className="flex flex-row pb-6">
                <div className="text-[#8d9cad] p-2">TC Kimlik No</div>
                <input
                    placeholder='Fatura Sahibi TC Kimlik No'
                    className="border font-thin p-2"
                />
            </div>
            <div className="flex flex-row pb-6">
                <div className="text-[#8d9cad] p-2">İsim/Soyisim</div>
                <input
                    placeholder='Fatura Sahibi İsim / Soyisim'
                    className="border font-thin p-2"
                />
            </div>
            <div className="flex flex-row pb-6">
                <div className="text-[#8d9cad] p-2">Fatura Adresi</div>
                <input
                    placeholder='Ülke'
                    className="border font-thin p-2"
                />
                <input
                    placeholder='İl'
                    className="border font-thin p-2"
                />
                <input
                    placeholder='İlçe'
                    className="border font-thin p-2"
                />
            </div>
            <div className="pb-4">
                <input
                    placeholder='Şahıs Adresi'
                    className="border font-thin p-2 w-full"
                />
            </div>
            <div className='flex items-center bg-[#f4f7fa] text-[#37495f] w-full h-10 mb-2'>Diğer Bilgiler</div>
            <div className="flex flex-row pb-6">
                <div className="text-[#8d9cad] p-2">Müşteri Notu</div>
                <input
                    placeholder='Müşteri Notu'
                    className="border font-thin p-2 w-full h-20"
                />
            </div>
            <div className="flex flex-row pb-6">
                <div className="text-[#8d9cad] p-2">Operasyona Not</div>
                <input
                    placeholder='Operasyona Not'
                    className="border font-thin p-2 w-full h-20"
                />
            </div>
            <div className="flex flex-row pb-6">
                <div className="text-[#8d9cad] p-2">Gizli Operasyon Notu</div>
                <input
                    placeholder='Gizli Operasyon Notu'
                    className="border font-thin p-2 w-full h-20"
                />
            </div>
            <div className="flex flex-row pb-6">
                <div className="text-[#8d9cad] p-2">Tesise Not</div>
                <input
                    placeholder='Tesise Not'
                    className="border font-thin p-2 w-full h-20"
                />
            </div>
        </div>
    )
}

export default List