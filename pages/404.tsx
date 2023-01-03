import React from 'react'
import Nav from '../components/nav/Nav'

function fOf() {
    return (
        <div>
            <Nav></Nav>
            <div className=' select-none  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div>
                    <h1 className='font-thin text-5xl text-center'>404</h1>
                    <h2>Page Not Found</h2>
                </div>
            </div>
        </div>
    )
}

export default fOf