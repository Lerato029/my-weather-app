import Head from "next/head";
import WeatherApp from "../components/WeatherApp"

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WeatherApp />
    </div>
  );
}