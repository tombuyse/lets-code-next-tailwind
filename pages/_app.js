import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-500 w-full flex justify-center mb-3">
        <h1 className="font-titleFont text-5xl text-gray-900">
          Stino's blog ❤️
        </h1>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
