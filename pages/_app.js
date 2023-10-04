import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react"; // Import the Auth0Provider
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Check if we're running on the client side before accessing the window object
    if (typeof window !== "undefined") {
      // You can initialize Auth0 here if needed, but it's often done within the Auth0Provider
    }
  }, []);

  return (
    <div>
      <Auth0Provider
        domain="dev-lwgifryvmjyfxcay.us.auth0.com"
        clientId="LhfJeZBKQ5BFGjBY8X6hDOk1g9lePTIR"
        redirectUri={typeof window !== "undefined" ? window.location.origin : ""}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </div>
  );
}
