import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = document.getElementById("root");
const index = createRoot(root);

index.render(<App />);
