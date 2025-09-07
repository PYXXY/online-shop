import {HeartIcon, BellIcon, ChatBubbleLeftIcon, UserCircleIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"



const NavBar = () => {

    return(
        <div className="w-screen h-20 flex items-center justify-evenly  p-4 bg-gray-100">
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="logo" className="h-auto w-10 object-contain"/>
                <span className="text-2xl font-bold text-amber-500">NoMoneyNoHoney</span>
            </div>
            <div className="flex intems-center gap-2 justify-evenly">
                <button> <HeartIcon className="h-6 w-6 text-amber-500" /> </button>
                <button> <BellIcon className="h-6 w-6 text-amber-500" /> </button>
                <button> <ChatBubbleLeftIcon  className="h-6 w-6 text-amber-500"/> </button>
                <button> <UserCircleIcon className="h-6 w-6 text-amber-500"/> </button>
                <button className="flex items-center text-amber-500 border-1 border-amber-500 p-2 rounded-4xl"><ArrowRightStartOnRectangleIcon
                    className="h-6 w-6 text-amber-500"/>Sign in</button>

            </div>

        </div>
    )
}

export default NavBar;