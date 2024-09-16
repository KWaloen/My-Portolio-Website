import NavBar from "../../FrontPage/NavBar"
import Banner from "../../FrontPage/Banner"
import Footer from "../../FrontPage/Footer"
import Image from "next/image"

export default function CV() {
    return (
        <div className="page">
            <NavBar />
                
            <Banner message = "📝 Kai's CV 💼"/>

            <div>
            <Image src="/Kai_CV.png" alt="My CV" width = {800} height = {700}/>
            </div>

            <Footer/>
        </div>
    )
}