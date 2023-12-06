import Pic from '../assets/hpSection.png'

function Home() {
    return (
        <div className="my-6 p-5 flex flex-wrap justify-between items-center">
            <div className="flex my-6 justify-start">
                <div className="p-2 m-4">
                    <h1 className="text-3xl text-bold">Pusat Hp Berkualitas</h1>
                    <p className='text-md my-4'>Beli hp berkualitas terjamin? ManganCode solusinya</p>
                    <button type="submit" className="py-2 px-3 rounded bg-blue-400 hover:bg-blue-300 text-white">Beli Sekarang</button>
                </div>
            </div>
            <div className="flex justify-center m-3">
                <img src={Pic} alt="home section" />
            </div>
        </div>
    )
}

export default Home;