import Head from "next/head";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";

export default function Home({ onLogin, onLogout }) {
  return (
    <div>
      <Head>
        <title>Neptune Mutual - FE</title>
        <meta
          name="description"
          content="Assignment Created for Neptune Mutual"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>

      <main>
        <Navbar />
        <Dashboard onLogin={onLogin} onLogout={onLogout} />
      </main>
    </div>
  );
}
