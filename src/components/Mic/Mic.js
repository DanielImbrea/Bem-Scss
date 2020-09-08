import React from "react";
import "./Mic.scss";
const Mic = () => {
  return (
    <div className="mic">
      <div className="mic__inner">
        <div className="mic__left">
          <img
            src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
        </div>
        <div className="mic__right">
          <div className="about">
            <p>#About</p>
          </div>
          <h2>What is MiC?</h2>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum, dolore. Esse molestias consequuntur saepe autem
              illo magnam nisi explicabo soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Enim cumque voluptatibus tenetur magni voluptatum
              blanditiis, nemo a quis! Molestias quam nostrum numquam?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Asperiores possimus enim eligendi!
            </p>
          </div>
          <div className="signature">
            <img
              src="https://images.unsplash.com/photo-1599493622108-f9471f8e9043?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mic;
