import React, { useEffect, useState } from "react";
import { data } from "../data/data";
import DatePicker from "react-date-picker";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HotelIcon from "@mui/icons-material/Hotel";
import CropDinIcon from "@mui/icons-material/CropDin";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";

function PostList() {
  const [displayData, setDisplayData] = useState([]);

  const [PropertyType, setPropertyType] = useState("");
  const [Price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [Location, setLocation] = useState("");

  function handleFilterButton() {
    

    const d = date + "";

    let checkDate = d.split(" ").slice(0, 4).join(" ");
    

    setDisplayData(displayData => displayData.filter((post) => {
        if (Location && post.location !== Location) {
          console.log("d");
          return false;
        }
  
        if (PropertyType && post.property !== PropertyType) {
          console.log("d");
          return false;
        }
  
        if (Price && post.price < Price) {
          console.log("d");
          return false;
        }
  
        if (date && post.date !== checkDate) {
          console.log("d");
          return false;
        }
  
        return true;
      }))

      console.log(displayData)
  }

  useEffect(() => {
    setDisplayData(data);
  }, []);

  const renderedPosts = displayData.map((post) => (
    <article key={post.id}>
      <div>
        <div>
          <img
            className="m-auto rounded-t-md "
            src={post.image}
            alt={`${post.name}'s house `}
          />
        </div>

        <div className="bg-gray-300 px-3  lg:px-6 py-4 ">
          <div className="flex justify-between">
            <h1 className="text-lg text-indigo-500 font-bold tracking-wider">
              ${post.price} <span className="font-normal text-sm">/Month</span>
            </h1>

            <FavoriteBorderIcon />
          </div>

          <h3 className="flex text-lg text-gray-900  tracking-wider mt-2 font-bold">
            {post.name}
          </h3>
          <p className="flex text-gray-700 text-xs  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2  font-medium">
            {post.address},{post.location}
          </p>
        </div>
        <div className="py-2 px-4 w-full flex justify-evenly bg-gray-300 rounded-b-md">
          <p className="text-sm text-indigo-700 font-semibold tracking-wide">
            <span>
              <HotelIcon />
            </span>
            <span className="ml-2 font-bold">{post.beds} Beds</span>
          </p>
          <p className="text-sm text-indigo-700 font-semibold tracking-wide flex">
            <span>
              <BathtubIcon />
            </span>
            <span className="ml-2 font-bold">{post.bathroom} Bathrooms</span>
          </p>

          <p className="text-sm text-indigo-700 font-semibold tracking-wide">
            <span>
              <CropDinIcon />
            </span>
            <span className="ml-2 font-bold">{post.area} Sq.ft</span>
          </p>
        </div>
      </div>
    </article>
  ));

  return (
    <div>
      <div>
        <div className="md:flex  justify-evenly p-5">
          <div>
            <div className="md:flex md:justify-start">location</div>
            <select
              onChange={(e) => setLocation(e.target.value)}
              className="font-bold"
            >
              <option value=""></option>
              <option value="New York, USA">New York, USA</option>
              <option value="Texas, USA">Texas, USA</option>
              <option value="California, USA">California, USA</option>
            </select>
          </div>

          <div>
            <div className="md:flex md:justify-start">When</div>
            <DatePicker
              className="font-bold"
              onChange={setDate}
              format="y-MM-dd"
              value={date}
            />
          </div>

          <div>
            <div className="md:flex md:justify-start">Price</div>
            <select
              onChange={(e) => setPrice(e.target.value)}
              className="font-bold"
            >
              <option value=""></option>
              <option value="200">$200</option>
              <option value="500">$500</option>
              <option value="700">$700</option>
            </select>
          </div>

          <div>
            <div className="md:flex md:justify-start">Property</div>
            <select
              onChange={(e) => setPropertyType(e.target.value)}
              className="font-bold"
            >
              <option value=""></option>
              <option value="House">House</option>
              <option value="Hotel">Hotel</option>
              <option value="Community Hall">Community Hall</option>
            </select>
          </div>

          <Button variant="contained" onClick={handleFilterButton}>
            Search
          </Button>
        </div>
      </div>
      <div id="posts" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <div className="lg:mx-12 ">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
              <div>
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20">
                  {renderedPosts}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
