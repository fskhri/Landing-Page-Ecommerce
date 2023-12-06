import ListPic from '../assets/vivo.jpeg'

function Product() {
    return (
        <div className="my-8 p-2">
            <div className="flex flex-wrap justify-center gap-2">
                <div>
                    <img src={ListPic} alt="list-img" />
                    <p className="flex justify-center p-2">Vivo</p>
                </div>
                <div>
                    <img src={ListPic} alt="list-img" />
                    <p className="flex justify-center p-2">Oppo</p>
                </div>
                <div>
                    <img src={ListPic} alt="list-img" />
                    <p className="flex justify-center p-2">Samsung</p>
                </div>
            </div>

            <div className="my-4">
                <h2 className="text-2xl text-center">Best seller Product</h2>
                <div className="flex flex-wrap justify-center my-4 gap-2">
                    <button className="py-2 px-3 rounded bg-blue-400 text-white">All</button>
                    <button className="py-2 px-3 rounded border-2 border-blue-400 hover:bg-blue-400">Gaming</button>
                    <button className="py-2 px-3 rounded border-2 border-blue-400 hover:bg-blue-400">Iphone</button>
                </div>

            <div className="my-8 flex flex-wrap justify-center gap-2">
                <div>
                    <img src={ListPic} alt="list-img" />
                    <p className="flex justify-center p-2">Rog</p>
                </div>
                <div>
                    <img src={ListPic} alt="list-img" />
                    <p className="flex justify-center p-2">Iphone 12</p>
                </div>
                <div>
                    <img src={ListPic} alt="list-img" />
                    <p className="flex justify-center p-2">Samsung Z flip</p>
                </div>
                <div>
                    <img src={ListPic} alt="list-img" />
                    <p className="flex justify-center p-2">Rog</p>
                </div>
            </div>
         </div>
        </div>
    )
}

export default Product;