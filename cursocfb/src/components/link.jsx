export default function Link({btn}) {

    const linkOn = <a className='hover:text-white hover:bg-gray-700 p-3 rounded-md border-2 border-black' href="https://www.youtube.com" target='_blank'>Youtube</a>

    const linkOff = <a className='hover:text-white hover:bg-gray-700 p-3 rounded-md' href="">Youtube</a>

    return (
        <div className="text-center mt-10">
            <p className="mb-5">{btn ? 'Pode clicar! ⬇️' : 'Nem tenta 😢'}</p>
            {btn ? linkOn : linkOff}
        </div>
    )
}