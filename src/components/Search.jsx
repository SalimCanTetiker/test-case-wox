
const Search = () => {
    return (
        <div className="flex flex-row justify-between m-8">
            <input
                placeholder="search"
                className="rounded-l-full flex items-center"
            />
            <div className="bg-gray-700 rounded-r-full">
                <button>Ara</button>
            </div>
        </div>
    )
}

export default Search