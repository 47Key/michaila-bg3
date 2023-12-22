import React from 'react'

export const Features = () => {
    return (
        <section className="w-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold first:text-white">Organized with Love<span className='px-1'>&hearts;</span> for Nerds Worldwide</h2>
                <h3 className="text-xl text-white lg:px-48">Embark on an Epic Journey with Fellow Adventurers.</h3>
                <p className="text-sm text-white lg:px-48">Join our vibrant community of gamers dedicated to exploring the rich, fantastical world of Baldur'&apos;s Gate 3. Discover, strategize, and conquer together.</p>
                <div className="mt-8 lg:mt-16 mb-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    <div className='py-2.5'>
                        <div className="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-red-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-16 h-16 text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-white">Forge Your Path</h3>
                        <p className="mx-5 mb-4 text-white">Engage in discussions, share your character builds, and explore the vast possibilities within the game. Our server is the perfect place to enhance your gaming experience.</p>
                    </div>
                    <div className='py-2.5'>
                        <div className="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-purple-900">
                            <svg className="mx-auto w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd"></path></svg>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-white">Master the Game</h3>
                        <p className="mx-5 mb-4 text-white">Access to custom events, tips from veteran players, and the latest news about Baldur'&apos;s Gate 3. Stay ahead in your adventure with our expert insights.</p>
                    </div>
                    <div className='py-2.5'>
                        <div className="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-orange-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-16 h-16 text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>
                        <h3 class="mb-4 text-2xl font-bold text-white">Epic Quests & Team Adventures</h3>
                        <p class="mb-4 text-white">Dive into regular in-game events and team-based challenges. Collaborate with fellow discord members in epic quests and enjoy exclusive multiplayer adventures tailored for our community.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
