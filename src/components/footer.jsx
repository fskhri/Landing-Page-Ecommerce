function Footer() {
    return (
        <div className="bg-black">
            <div className="p-4 flex flex-wrap justify-center gap-10">
                <div className="p-0">
                    <p className="text-lg text-slate-100">Address</p>
                    <p className="text-sm text-slate-200">Jl Lorem ipsum dolor sit amet. jakarta Indonesia</p>
                </div>
                <div className="p-0">
                    <p className="text-lg text-slate-100">Contact Us</p>
                    <ul className="list-none">
                        <li className="text-slate-200 hover:text-blue-300">Instagram</li>
                        <li className="text-slate-200 hover:text-blue-300">Telegram</li>
                        <li className="text-slate-200 hover:text-blue-300">Email</li>
                    </ul>
                </div>
                <div className="p-0">
                    <p className="text-lg text-slate-100">Message us</p>
                    <form action="" method="post" className="my-3">
                        <input type="email" name="email" id="" className="block gap-2 p-2 border-none rounded" placeholder="Your email"/>
                        <input type="password" name="password" className="block my-2 p-2 border-none rounded" id=""  placeholder="Password"/>
                        <button type="submit" className="py-2 px-20 bg-blue-400 text-white rounded hover:bg-blue-300">Send</button>
                    </form>
                </div>
            </div>
            <p className="p-5 text-slate-300 text-center">Created with ❤️ <span className="text-blue-500">Mangandaralam Sakti</span> 2023 </p>
        </div>
    )
}

export default Footer;