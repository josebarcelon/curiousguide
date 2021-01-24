import Head from "next/head";

export default function Home() {
  return (
    <div className="font-sans h-screen flex flex-col align-center justify-center">
      <Head>
        <title>Curious Guide | A guide to mental health</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <main className="text-center flex flex-col align-center flex-1 justify-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          🧠 <span className="bg-pink-100">Curious Guide</span>
        </h1>
        <p className="text-1xl text-gray-600 mt-4">A guide to mental health.</p>
        <p className="text text-gray-400 mt-4">
          Understanding feeling.
          <br />
          Cultivating happiness.
          <br />
          Building meaningful relationships.
        </p>
      </main>

      <footer className="text-center p-4 border-t border-gray-300">
        2021 |{" "}
        <a
          href="https://twitter.com/jobarcelon"
          target="_blank"
          rel="noopener noreferrer"
        >
          @jobarcelon
        </a>
      </footer>
    </div>
  );
}
