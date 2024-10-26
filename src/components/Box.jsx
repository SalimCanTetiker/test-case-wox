
const Box = ({ title, icon }) => {
    return (
        <div className="text-black bg-[#fafafa] m-4 p-2">
            <div className="flex justify-center">
                {icon}
            </div>
            {title}
        </div>
    )
}

export default Box