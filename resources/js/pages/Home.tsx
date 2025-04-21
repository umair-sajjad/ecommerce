import HomeCarousal from "@/components/homeCarousal";
import InfoSection from "@/components/infoSection";
import Navbar from "@/components/navbar";
import ProductsSection from "@/components/productsSection";
export default function Home() {
    return (
        <>
            <Navbar/>
            <section className="flex h-screen relative bg-[url('/images/banner-bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto flex justify-between items-center h-full">
                <HomeCarousal/>
            </div>
            </section>
            <InfoSection/>
            <ProductsSection/>
        </>
    );
}