import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
