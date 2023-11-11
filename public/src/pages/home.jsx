import image from "../../public/images/house_5.png"
import Banner from "../components/banner"
import Features from "../components/features"
import Header from "../components/header"
import Pagination from "../components/pagination"
import Produtcs from "../components/product"

const Home = ({productList,onClickShowDetailProduct,onClickLogin}) => {
  return (
    <>
    {/* <!-- header start --> */}
    <Header/>
    {/* <!-- header end --> */}     
    <Banner/>
    {/* Banner Start */}

    {/* Banner End */}
    {/* features start */}
    <Features/>
    {/* features end */}
    
    {/* product start */}
    <Produtcs productList={productList} onClickShowDetailProduct={onClickShowDetailProduct}/>
    {/* product end */}

    {/* pagination start */}
    <Pagination/>
    {/* pagination end */}
    </>
    
  )
}

export default Home