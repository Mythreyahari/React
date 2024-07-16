//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import reactDom from "react-dom";
const name = "Hari";
let currentYear = new Date().getFullYear();
reactDom.render(
  <div>
    <p>Created by {name}</p>
    <p> © Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
