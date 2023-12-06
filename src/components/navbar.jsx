function Navbar() {

    return (
        <div className="p-8 bg-white flex flex-wrap justify-between">
            <div className="flex justify-center">
                <a href="" className="text-blue-400 font-bold text-2xl">ManganCode</a>
            </div>
            <ul className="flex gap-3 list-none">
                <li><a href="" className="decoration-none hover:text-blue-300">HOME</a></li>
                <li><a href="" className="decoration-none hover:text-blue-300">PRODUCT</a></li>
                <li><a href="" className="decoration-none hover:text-blue-300">SERVICE</a></li>
                <li><a href="" className="decoration-none text-white hover:text-blue-300 bg-blue-400 rounded px-3 py-2">LOGIN</a></li>
            </ul>
        </div>
    )
}

export default Navbar;