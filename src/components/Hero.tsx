

function Hero () {
    return (
        <div>
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center pt-24 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/img/bg home.jpg')", height: "500px" }}>
                <h1 className="text-5xl text-red-500 font-bold mt-10">MABSI SOY</h1>
                <p className="text-3xl text-red-600 mt-4">PEKA MANYAMAN SILOG KENI SASMUAN</p>
                <div className="mt-8 space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-md">ORDER NOW!</button>
                <button className="bg-black text-white px-6 py-3 rounded-md mb-10">RESERVE NOW!</button>
                </div>
            </section>
            {/* Menu Section */}
            <section className="container mx-auto mt-10">
            <h2 className="text-4xl text-red-500 text-center">MENU</h2>
            <div className="flex justify-center space-x-8 mt-8">
                <div className="bg-white shadow-lg rounded-lg ">
                    <img src="/src/assets/img/menu_item1.jpg" alt="Overload Lugaw" className="w-80 h-96"/>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="/src/assets/img/menu_item.jpg" alt="Combo Sulit Sarap Meals" className="w-80 h-96"/>
                </div>
            </div>
            <div className="text-center mt-8">
                    <button className="bg-black text-white px-6 py-3 rounded-md">SEE ALL MENU!</button>
            </div>
    </section>

        </div>

    )
}

export default Hero;