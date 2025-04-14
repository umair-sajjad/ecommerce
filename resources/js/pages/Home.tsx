import React from "react";
import HomeCarousal from "@/components/homeCarousal";
export default function Home() {
    return (
        <>
            <section className="flex h-screen relative bg-[url('/images/banner-bg.jpg')] bg-cover bg-center bg-no-repeat">
                <HomeCarousal/>
            </section>
        </>
    );
}