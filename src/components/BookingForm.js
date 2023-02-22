import React, { useState } from "react";
// import { useSelector } from "react-redux";
import Select from "react-select";

import { destinationFrom, guestCount, passengerClass } from "./OptionsValues";

import frame from "../img/icons/Frame.svg";
import vector1 from "../img/icons/Vector (1).svg";
import vector3 from "../img/icons/Vector (3).svg";

export default function BookingForm() {
  //   const ck = useSelector((state) => state.booked.row);
  //   console.log(ck);
  const [desFrom, setDesfrom] = useState();
  const [desTo, setDesTo] = useState();
  const [journeyDate, setJourneyDate] = useState();
  const [guest, setGuest] = useState();
  const [seatClass, setSeatClass] = useState();
  //   console.log(desFrom);

  const handleFields = () => {
    console.log(desFrom);
    console.log(desTo);
    console.log(journeyDate);
    console.log(guest);
    console.log(seatClass);
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          className="first-hero lws-inputform"
          onSubmit={(e) => {
            return e.preventDefault();
          }}
        >
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <Select
                className="outline-none px-2 py-2 w-full"
                id="lws-from"
                options={destinationFrom}
                onChange={(dChoice) => setDesfrom(dChoice.value)}
                required
              />
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <Select
                className="outline-none px-2 py-2 w-full"
                id="lws-to"
                options={destinationFrom}
                onChange={(dChoice) => setDesTo(dChoice.value)}
                required
              />
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              //   value={journeyDate}
              required
              onChange={(e) => setJourneyDate(e.target.value)}
            />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={vector1} alt="" />
              <Select
                className="outline-none px-2 py-2 w-full"
                id="lws-guests"
                options={guestCount}
                onChange={(dChoice) => setGuest(dChoice.value)}
                required
              />
            </div>
          </div>

          <div className="des-from !border-r-0">
            <p>className</p>
            <div className="flex flex-row">
              <img src={vector3} alt="" />
              <Select
                className="outline-none px-2 py-2 w-full"
                id="lws-ticketclassName"
                options={passengerClass}
                onChange={(dChoice) => setSeatClass(dChoice.value)}
                required
              />
            </div>
          </div>

          <button
            className="addCity"
            type="submit"
            id="lws-addCity"
            onClick={handleFields}
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}
