import { Contact, Home, Hotel, Menu, PersonStanding, RouteIcon } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const sidebar_items = [
    { name: 'Anasayfa', icon: Home, color: 'white', href: '/' },
    { name: 'OtelRezervasyon', icon: Hotel, color: 'white', href: '/rezervasyon' },
    { name: 'TurRezervasyon', icon: RouteIcon, color: 'white', href: '/turRezervasyon' },
    { name: 'MüşteriYönetimi', icon: Contact, color: 'white', href: '/müşteriYönetimi' },
    { name: 'Operasyon', icon: Home, color: 'white', href: '/operasyon' },
    { name: 'Muhasebe', icon: Home, color: '', href: '/muhasebe' },
    { name: 'ReklamYönetimi', icon: Home, color: '', href: '/reklamYönetimi' },
    { name: 'Tesisler', icon: Home, color: '', href: '/tesisler' },
    { name: 'Turlar', icon: Home, color: '', href: '/turlar' },
    { name: 'Transport', icon: Home, color: '', href: '/transport' },
    { name: 'SiteAyarları', icon: Home, color: 'white', href: '/siteAyarları' },
    { name: 'GenelAyarlar', icon: Home, color: 'white', href: '/genelAyarlar' },
    { name: 'İnsanKaynakları', icon: PersonStanding, color: 'white', href: '/insanKaynakları' },
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
                                className="flex items-center p-4 text-sm font-medium rounded-lg hover: bg-gray-700 transition-colors mb-2">
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
                <div className="flex flex-row justify-around">
                    <Menu size={20} color="#4e6680" />
                    <Home size={20} color="#4e6680" />
                    <Menu size={20} color="#4e6680" />
                    <Home size={20} color="#4e6680" />
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar