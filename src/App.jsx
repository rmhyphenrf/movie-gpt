import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import Browse from "./components/Browse"
import { Provider } from "react-redux"
import appStore from "./store/appStore"

function App() {
      const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])

    return (
      <div>
        <Provider store={appStore}>
          <RouterProvider router={appRouter} />
        </Provider>
      </div>
    )
}

export default App
