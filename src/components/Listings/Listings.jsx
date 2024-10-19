import React, { useEffect, useState } from "react";
import "./Listings.css";
import { data } from "../../data/data.js";

function Listings() {
  const listings = data


  return (
    <div className="listings-container">
      <h1 className="listings-title">Property Listings</h1>
      <div className="active-listings">Active Listings</div>
      <div className="listings">
        {listings.map((listing) => {
          return (
            <div className="eachlisting">
              <img src={listing.imageUrl} alt={listing.title} className="" />
              <p className="name">{listing.title}</p>
              <p className="location">KES {listing.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Listings;
