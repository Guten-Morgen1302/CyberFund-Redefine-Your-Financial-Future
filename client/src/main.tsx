import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { fonts } from "./lib/fonts";

// Inject fonts into the CSS variables
fonts.addFontStyles();

createRoot(document.getElementById("root")!).render(<App />);
