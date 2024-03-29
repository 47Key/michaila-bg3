import React from 'react'

export const Schedule = () => {
    return (
        <section className="w-screen antialiased bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-3xl mx-auto space-y-4 text-center">
                    <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-white">
                        Upcoming Events
                    </h2>
                    <p className="text-xl font-medium leading-tight text-white">
                        January 20th-25th, 2023
                    </p>
                    <span
                        className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded text-white bg-red-500/50">
                        <svg aria-hidden="true" className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd" />
                        </svg>
                        Eastern Standard Time (EST)
                    </span>
                </div>

                <div className="grid grid-cols-1 mt-12 -mx-8 lg:mt-16 lg:grid-cols-3 gap-y-12">
                    <div className="px-8 space-y-12">
                        <h3 className="text-2xl font-bold text-center text-white">
                            Wednesday 20th
                        </h3>

                        <div className="space-y-4 mx-5 sm:mx-2 lg:mx-0 bg-gray-800 p-5 rounded-lg">
                            <span
                                className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded text-white bg-red-500/50">
                                <svg aria-hidden="true" className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd" />
                                </svg>
                                9:00 - 10:00
                            </span>
                            <h4 className="text-xl font-bold text-white">
                                <a href="#" className="hover:underline">Opening remarks</a>
                            </h4>
                            <div className="flex items-center gap-3">
                                <img className="object-cover w-12 h-12 rounded-full shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                                    alt="" />
                                <div>
                                    <p className="text-lg font-medium leading-tight text-white">
                                        Michaila Hazael
                                    </p>
                                    <p className="text-sm font-normal text-white">
                                        Event Organizer & Gorgeous af
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mx-5 sm:mx-2 lg:mx-0 bg-gray-800 p-5 rounded-lg">
                            <span
                                className="bg-red-500/50 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                                <svg aria-hidden="true" className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd" />
                                </svg>
                                11:00 - 12:00
                            </span>
                            <h4 className="text-xl font-bold text-white">
                                <a href="#" className="hover:underline">Some Cool Shit</a>
                            </h4>
                            <div className="flex items-center gap-3">
                                <img className="object-cover w-12 h-12 rounded-full shrink-0" src="https://avatars.githubusercontent.com/u/94882470?v=4"
                                    alt="" />
                                <div>
                                    <p className="text-lg font-medium leading-tight text-white">
                                        Ryley Keegan
                                    </p>
                                    <p className="text-sm font-normal text-white">
                                        Lead Developer & Handsome
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mx-5 sm:mx-2 lg:mx-0 bg-gray-800 p-5 rounded-lg">
                            <span
                                className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded text-white bg-red-500/50">
                                <svg aria-hidden="true" className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd" />
                                </svg>
                                11:00 - 12:00
                            </span>
                            <h4 className="text-xl font-bold text-white">
                                <a href="#" className="hover:underline">Character Build</a>
                            </h4>
                            <div className="flex items-center gap-3">
                                <img className="object-cover w-12 h-12 rounded-full shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                                    alt="" />
                                <div>
                                    <p className="text-lg font-medium leading-tight text-white">
                                        Lana Byrd
                                    </p>
                                    <p className="text-sm font-normal text-white">
                                        Character Build Advisor
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mx-5 sm:mx-2 lg:mx-0 bg-gray-800 p-5 rounded-lg">
                            <span
                                className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded text-white bg-red-500/50">
                                <svg aria-hidden="true" className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd" />
                                </svg>
                                15:00 - 16:00
                            </span>
                            <h4 className="text-xl font-bold text-white">
                                <a href="#" className="hover:underline">Dungeon Tactics: Mastering Co-op Challenges in RPGs</a>
                            </h4>
                            <div className="flex items-center gap-3">
                                <img className="object-cover w-12 h-12 rounded-full shrink-0"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="" />
                                <div>
                                    <p className="text-lg font-medium leading-tight text-white">
                                        Robert Brown
                                    </p>
                                    <p className="text-sm font-normal text-white">
                                        PvP (Player vs Player) Strategist
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mx-5 sm:mx-2 lg:mx-0 bg-gray-800 p-5 rounded-lg">
                            <span
                                className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded text-white bg-red-500/50">
                                <svg aria-hidden="true" className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd" />
                                </svg>
                                15:00 - 16:00
                            </span>
                            <h4 className="text-xl font-bold text-white">
                                <a href="#" className="hover:underline">Open-World Gaming: Latest Updates and Community Mods</a>
                            </h4>
                            <div className="flex items-center gap-3">
                                <img className="object-cover w-12 h-12 rounded-full shrink-0"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="" />
                                <div>
                                    <p className="text-lg font-medium leading-tight text-white">
                                        Robert Brown
                                    </p>
                                    <p className="text-sm font-normal text-white">
                                        Community Manager
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mx-5 sm:mx-2 lg:mx-0 bg-gray-800 p-5 rounded-lg">
                            <span
                                className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded text-white bg-red-500/50">
                                <svg aria-hidden="true" className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd" />
                                </svg>
                                17:00 - 18:00
                            </span>
                            <h4 className="text-xl font-bold text-white">
                                <a href="#" className="hover:underline">Building a Successful Twitch Channel: From Zero to Hero</a>
                            </h4>
                            <div className="flex items-center gap-3">
                                <img className="object-cover w-12 h-12 rounded-full shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                                    alt="" />
                                <div>
                                    <p className="text-lg font-medium leading-tight text-white">
                                        Thomas Lean
                                    </p>
                                    <p className="text-sm font-normal text-white">
                                        Discord Moderator
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="object-cover w-12 h-12 rounded-full shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                                    alt="" />
                                <div>
                                    <p className="text-lg font-medium leading-tight text-white">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm font-normal text-white">
                                        Streaming Specialist
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="object-cover w-12 h-12 rounded-full shrink-0"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="" />
                                <div>
                                    <p className="text-lg font-medium leading-tight text-white">
                                        Bonnie Green
                                    </p>
                                    <p className="text-sm font-normal text-white">
                                        PvE (Player vs Environment) Tactics Leader
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
