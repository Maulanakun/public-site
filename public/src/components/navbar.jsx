import { Link } from "react-router-dom"

const NavBar = ({onClickShowProduct,onClickLogin}) => {
  return (
    <>
     <nav className="bg-gray-800">
        <div className="container flex">
            {/* <!-- all category --> */}
            <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                <span className="text-white">
                    <i className="fa fa-bars"> All Categories</i>
                </span>
                <span className="capitalize ml-2 text-white hidden"></span>

                {/* <!-- dropdown --> */}
                <div
                    className="absolute w-full z-40 left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img  src="../../public/images/lemari-18.png" alt="Lemari" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Lemari</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../../public/images/Sofa.jpg" alt="Sofa" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../../public/images/meja kerja rumah.jpg" alt="MejaKerja" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Meja Kerja</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../../public/images/Kursi tanpa pelapis.jpg" alt="Kursi" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Kursi Tanpa Pelapis</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../../public/images/Bantal Kursi.jpg" alt="bantalKursi" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Bantal Kursi</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../../public/images/kasur.png" alt="kasur" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Kasur</span>
                    </a>
                
                </div>
            </div>
            {/* <!-- all category end--> */}
            {/* <!-- navbar link--> */}
            <div className="flex items-center justify-between flex-grow pl-12">
                <div  className="flex items-center space-x-6 capitalize">
                    <Link to='/pub/product' className="text-gray-200 hover:text-white transition"><button onClick={onClickShowProduct}>Home</button></Link>
                    <a href="pages/shop.html" className="text-gray-200 hover:text-white transition">Shop</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">About us</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Contact us</a>
                </div>
                <a className="text-gray-200 hover:text-white transition"><button onClick={onClickLogin}>Login</button></a>
            </div>
        </div>
    </nav>
    </>
  )
}


export default NavBar