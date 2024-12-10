export default function Btn({btn, setBtn}) {
    return (
        <div>
            <div className={`m-auto border-2 border-black my-10 rounded-full w-[100px] h-[100px] ${btn ? 'bg-green-500' : 'bg-red-500'}`}></div>

            <button 

            className='m-auto block bg-gray-800 p-2 rounded-md text-white hover:bg-gray-200 hover:text-black hover:border-black border-2' 

            onClick={() => {

            if (btn) {
                setBtn(false)
            } else {
                setBtn(true)
            }

            }}>{btn ? 'Desligar' : 'Ligar'}
            </button>
        </div>
    )
}