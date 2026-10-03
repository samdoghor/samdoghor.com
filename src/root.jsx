import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/ThemeContext";
import stylesheet from "./index.css?url";

// eslint-disable-next-line react-refresh/only-export-components
export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

const faviconLinks = [
  ["apple-touch-icon", "57x57", "/favicon/apple-icon-57x57.png"],
  ["apple-touch-icon", "60x60", "/favicon/apple-icon-60x60.png"],
  ["apple-touch-icon", "72x72", "/favicon/android-icon-72x72.png"],
  ["apple-touch-icon", "76x76", "/favicon/apple-icon-76x76.png"],
  ["apple-touch-icon", "114x114", "/favicon/apple-icon-114x114.png"],
  ["apple-touch-icon", "120x120", "/favicon/apple-icon-120x120.png"],
  ["apple-touch-icon", "144x144", "/favicon/apple-icon-144x144.png"],
  ["apple-touch-icon", "152x152", "/favicon/apple-icon-152x152.png"],
  ["apple-touch-icon", "180x180", "/favicon/apple-icon-180x180.png"],
  ["icon", "192x192", "/favicon/android-icon-192x192.png"],
  ["icon", "32x32", "/favicon/favicon-32x32.png"],
  ["icon", "96x96", "/favicon/favicon-96x96.png"],
  ["icon", "16x16", "/favicon/favicon-16x16.png"],
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msvalidate.01" content="C20558CF315F1A1B394D6CBB420F8740" />
        {faviconLinks.map(([rel, sizes, href]) => (
          <link key={href} rel={rel} sizes={sizes} href={href} />
        ))}
        <link rel="manifest" href="/favicon/manifest.json" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=true;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=true;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1892472114290298");fbq("track","PageView");`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","l83viysl8p");`,
          }}
        />
      </head>
      <body>
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1892472114290298&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export function ErrorBoundary() {
  return (
    <main>
      <h1>Something went wrong</h1>
      <p>The page could not be loaded.</p>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};