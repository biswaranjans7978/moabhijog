import React from "react";
import ImageUploader from "../Showfile/ImageUploader";
import { Link } from "react-router-dom";
import CustomerDetails from "../Showfile/CustomerDetails";

function Abhijogpage() {
  return (
    <>
      <div className=" border-2 p-4 mt-4 bg-red-200">
        <CustomerDetails />
      </div>
      <div className=" h-40 bg-red-200 lg:flex items-center justify-center justify-around pt-10 lg:p-0">
        <div className="">
          <h1>ଏହିଠାରେ ଆପଣଙ୍କ ଅଭିଯୋଗ ଲେଖନ୍ତୁ</h1>
          <textarea className=" w-72" name="" id=""></textarea>
        </div>
        <div className="">କିମ୍ବା</div>

        <div className="">
          <ImageUploader />
        </div>
      </div>
      <div className=" flex justify-center">
      <Link to="/thanks">
        <div className="  bg-zinc-500 w-20   text-white hover:bg-green-600 text-center p-3 border rounded-md">
          Submit
        </div>
      </Link>
      </div>
    </>
  );
}

export default Abhijogpage;
