import { Binoculars, BriefcaseBusiness, CircleX, Clapperboard, Cog, Contact, Expand, EyeOff, Handshake, Home, Hotel, Menu, MonitorCog, Percent, PersonStanding, Plane, RouteIcon, Settings } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const sidebar_items = [
    { name: 'Anasayfa', icon: Home, color: '#2b3e54', href: '/' },
    { name: 'OtelRezervasyon', icon: Hotel, color: '#2b3e54', href: '/rezervasyon' },
    { name: 'TurRezervasyon', icon: RouteIcon, color: '#2b3e54', href: '/turRezervasyon' },
    { name: 'MüşteriYönetimi', icon: Contact, color: '#2b3e54', href: '/müşteriYönetimi' },
    { name: 'Operasyon', icon: Handshake, color: '#2b3e54', href: '/operasyon' },
    { name: 'Muhasebe', icon: Percent, color: '#2b3e54', href: '/muhasebe' },
    { name: 'ReklamYönetimi', icon: Clapperboard, color: '#2b3e54', href: '/reklamYönetimi' },
    { name: 'Tesisler', icon: BriefcaseBusiness, color: '#2b3e54', href: '/tesisler' },
    { name: 'Turlar', icon: Binoculars, color: '#2b3e54', href: '/turlar' },
    { name: 'Transport', icon: Plane, color: '#2b3e54', href: '/transport' },
    { name: 'SiteAyarları', icon: MonitorCog, color: '#2b3e54', href: '/siteAyarları' },
    { name: 'GenelAyarlar', icon: Cog, color: '#2b3e54', href: '/genelAyarlar' },
    { name: 'İnsanKaynakları', icon: PersonStanding, color: '#2b3e54', href: '/insanKaynakları' },
]
const Sidebar = () => {

    const [isSidebarOpen, setİsSidebarOpen] = useState(true)
    
    return (
        <motion.div
            className={`relative z-0 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
            <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 border-r border-gray-700'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => (setİsSidebarOpen(!isSidebarOpen))}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
                >
                    <Menu size={24} />
                </motion.button>
                <nav className='mt-8 flex-grow'>
                    {sidebar_items.map((item) => (
                        <Link key={item.href} to={item.href}>
                            <motion.div
                                className="flex items-center p-4 text-sm font-medium rounded-lg hover: bg-[#bdc1c6] text-[#2b3e54] transition-colors mb-2">
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className='ml-4 whitespace-nowrap'
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-row justify-around p-4">
                    <Settings size={20} color="white" />
                    <Expand size={20} color="white" />
                    <EyeOff size={20} color="white" />
                    <CircleX size={20} color="white" />
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar