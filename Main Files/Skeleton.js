import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";


const Skeleton = ()=>{
    return (<> 
    <div className="text-3xl bg-[#1a3d32] text-white p-4">
    <Header/>
    <Body/>
    <Footer/>
    </div>
    
    </>)
}
export default  Skeleton;