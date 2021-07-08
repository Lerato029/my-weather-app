/* =================================================================The Display Component======================================================= */
//import React to create component
import React from "react";
import Image from "next/image";

export default function Display(props) {
  //deconstructing code for better legibility
  const { cityData } = props;


  //Component returns a div element displaying the weather of the city selected
  //when the form in the App Component is submitted
  return (
    <div className="display my-2">
      <Image
        src="/icon.png"
        alt="Icon "
        width={250}
        height={250}
      />
      <h2 className="">{cityData && cityData.name}</h2>
      {cityData &&
        cityData.weather.map((status) => (
          <>
            <div className="main ">
              <h5>
                {cityData.main.temp}
                <sup>°C</sup>
              </h5>
              <h5>
                <Image
                  src={`http://openweathermap.org/img/w/${status.icon}.png`}
                  alt="Weather Icon"
                  width={60}
                  height={60}
                />
              </h5>
              <h5 className="text-capitalize ">{status.description}</h5>
            </div>
          </>
        ))}
      <h4></h4>
      <div className="main">
        <p className="mx-1 fw-bold">
          Min:
          {cityData && cityData.main.temp_min}
          <span>°</span>
        </p>
        <p className="mx-1 fw-bold">
          Max:
          {cityData && cityData.main.temp_max}
          <span>°</span>
        </p>
        <p className="mx-1 fw-bold">Humidity: {cityData.main.humidity}%</p>
      </div>
    </div>
  );
} //end of Display component
