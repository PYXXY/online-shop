import {HeartIcon, BellIcon, ChatBubbleLeftIcon, UserCircleIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"



const NavBar = () => {

    return(
        <div className="w-screen h-20 flex items-center justify-evenly  p-4 bg-gray-100">
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="logo" className="h-auto w-10 object-contain"/>
                <span className="text-2xl font-bold text-amber-600">NoMoneyNoHoney</span>
            </div>
            <div className="flex intems-center gap-2 justify-evenly">
                <button className="rounded-full cursor-pointer hover:border-amber-500 border border-transparent transition-all p-4"> <HeartIcon className="h-6 w-6 text-amber-600" /> </button>
                <button className="rounded-full cursor-pointer hover:border-amber-500 border border-transparent transition-all p-4"> <BellIcon className="h-6 w-6 text-amber-600" /> </button>
                <button className="rounded-full cursor-pointer hover:border-amber-500 border border-transparent transition-all p-4"> <ChatBubbleLeftIcon  className="h-6 w-6 text-amber-600"/> </button>
                <button className="rounded-full cursor-pointer hover:border-amber-500 border border-transparent transition-all p-4"> <UserCircleIcon className="h-6 w-6 text-amber-600"/> </button>
                <button className="flex items-center text-amber-600   cursor-pointer hover:border-amber-500 border border-transparent transition-all p-4 rounded-4xl"><ArrowRightStartOnRectangleIcon
                    className="h-6 w-6"/>Sign in</button>

            </div>

        </div>
    )
}

export default NavBar;