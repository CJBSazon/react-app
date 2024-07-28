

function Footer () {
    return (
        <div>
            <footer className="bg-orange-400 mt-10 py-10">
                <div className="container mx-auto text-center text-white">
                    <img className="w-12 rounded-full" src="/src/assets/img/logo.jpg" alt=""/>
                <div className="flex justify-around">
                <div>
                    <a href="#" className="block">HOME</a>
                    <a href="#" className="block mt-2">SERVICES</a>
                    <a href="#" className="block mt-2">ABOUT</a>
                    <a href="#" className="block mt-2">MENU</a>
                </div>
                <div className="max-w-xs">
                    <p>Keni na mga soy takman yuna ing peka manyaman, mura, malinis at quality silog meals keni Sasmuan</p>
                </div>
                <div>
                    <p>TELL US ABOUT MABSI SOY</p>
                    <input type="text" className="mt-2 px-3 py-2 rounded-md" placeholder="Your feedback"/>
                    <button className="bg-black text-white px-5 py-2 rounded-md mt-2">SEND NOW!</button>
                </div>
                </div>
                <p className="mt-10">Copyright&copy; 2022 | MABSI SOY</p>
                </div>
            </footer>
        </div>

    )
}

export default Footer;