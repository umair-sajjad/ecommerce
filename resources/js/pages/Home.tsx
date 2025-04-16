import HomeCarousal from "@/components/homeCarousal";
import Navbar from "@/components/navbar";
export default function Home() {
    return (
        <>
            <Navbar/>
            <section className="flex h-screen relative bg-[url('/images/banner-bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto flex justify-between items-center h-full">
                <HomeCarousal/>
            </div>
            </section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae enim ipsa vitae nobis quo eaque sequi commodi odio ullam maxime nulla, error tempore sunt vel aspernatur, consequuntur expedita nisi.</p>
        </>
    );
}