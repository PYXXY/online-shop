import Home from "./pages/Home.tsx"
import AddAnnouncement from "./pages/AddAnnouncement.tsx";
import AllAnnouncement from "./pages/AllAnnouncement.tsx";
import Favorites from "./pages/Favorites.tsx";
import UserAccount from "./pages/UserAccount.tsx";
import UserRegistration from "./pages/UserRegistration.tsx";

const router = [
    {
        path: '/',
        element: <Home />,
        showNavBar: true,
    },
    {
        path: '/addAnnouncement',
        element: <AddAnnouncement />,
        showNavBar: true,
    },
    {
        path: '/allAnnouncement',
        element: <AllAnnouncement />,
        showNavBar: true,
    },
    {
        path: '/favorites',
        element: <Favorites />,
        showNavBar: true,
    },
    {
        path: '/userAccount',
        element: <UserAccount />,
        showNavBar: true,
    },
    {
        path: '/userRegistration',
        element: <UserRegistration />,
        showNavBar: true,
    }
]

export default router