import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Watch from "./PAGES/Watch.tsx";
import Layout from "./Layout.tsx";
import YoutubeHero from "./PAGES/YoutubeHero.tsx";
import {Provider} from "react-redux";
import appStore from "./REDUX/appStore.ts";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <YoutubeHero/>
                },
                {
                    path: '/watch',
                    element: <Watch/>
                }
            ]
        }
    ])

    return (
        <Provider store={appStore}>
            <RouterProvider router={router}/>
        </Provider>

    )
}

export default App
