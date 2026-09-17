import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full max-w-305 mx-auto bg-white/10 backdrop-blur xl:rounded-t-xl px-6 py-4 text-center font-medium'>
            <p>&copy; {new Date().getFullYear()} Meetup. All right reserved.</p>
        </footer>
    )
}

export default Footer