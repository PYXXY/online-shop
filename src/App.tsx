
import router from './router.tsx';
import { Route, Routes } from 'react-router-dom';


function App() {


    return (
        <>

            <Routes>
                {router.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;