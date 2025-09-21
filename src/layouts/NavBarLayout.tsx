import NavBar from "../components/core/NavBar.tsx";
import BtnAddAnn from "../components/core/BtnAddAnn.tsx";


const NavBarLayout = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-start">
            <NavBar />
            <BtnAddAnn />
        </div>
    )
}

export default NavBarLayout