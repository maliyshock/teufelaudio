import { useGetData } from "./hooks/use-get-data.ts";
import { ProductDetails } from "./components/product-details.tsx";

function App() {
  const { status, error, data } = useGetData();

  if (status === "pending") return "Loading...";
  if (status === "error") return error ? JSON.stringify(error) : "something went wrong, try again later";

  return <ProductDetails variants={data} />;
}

export default App;
