import Image from 'next/image';
import React from 'react';

export const Hero = () => {
    return (
        <section id="hero-section" className="w-screen antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="text-center">
                    <div>
                        <h2 className="text-6xl font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                            The Baldur'&apos;s Games 
                        </h2>
                        <span className="md:block">By Michaila &hearts;</span>
                        <p
                            className="mt-4 text-base font-normal text-gray-200 md:max-w-3xl md:mx-auto sm:text-xl">
                            This event is kickass and you should probably sign-up... like right now...
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center my-8 sm:my-16 ">
                    <Image src="/bg3-logo.png" width={250} height={300} alt="Michaila's Baldur's Gate 3 Logo" />
                </div>
            </div>
        </section>
    );
}