import "./Home.scss";
import React, { useState, useEffect } from "react";
import { WhaleCarousel } from "../WhaleCarousel/WhaleCarousel";

export const Home: React.FunctionComponent = () => {

  return (
    <main>
      <h1 className="main-header">Whale Spotting</h1>
      <section className="image-info-section">
        <WhaleCarousel />
      </section >
    </main>
  );
};
