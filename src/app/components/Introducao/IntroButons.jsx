import React from 'react'
import { CgWebsite } from "react-icons/cg";
function IntroButons() {
  return (
    <>
        <h1 className="text-3xl font-bold p-8 text-center">Acesso aos sites</h1>
        <div className="flex justify-center space-x-16 pb-8">
            {[2, 3, 4].map((siteNumber) => (
                <button
                key={siteNumber}
                className="flex items-center justify-center btn btn-primary text-white"
                >
                <CgWebsite size={24} className="mr-2" />
                Site {siteNumber}
                </button>
            ))}
        </div>


    </>
  )
}

export default IntroButons