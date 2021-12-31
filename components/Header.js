import React from 'react'

export default function Header() {
    return (
        <section className="navigation-container py-2">
            <div className="container mx-auto flex items-center justify-between">
            <div className="logo">
                <h3 className="font-bold text-2xl text-main-color font-black">API monetization tool</h3>
            </div>
            <div className="navigation">
                <ul className="flex justify-end">
                    <li className="btn btn-main-bg-color  px-5 py-2 rounded mr-1 hover:cursor-pointer">Login</li>
                    <li className="btn btn-main-bg-color  px-5 py-2 rounded  hover:cursor-pointer">Sign up</li>
                </ul>
            </div>

            </div>
        </section>
    )
}
