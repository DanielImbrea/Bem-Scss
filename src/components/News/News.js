import React from "react";
import "./News.scss";
const News = () => {
  return (
    <div className="news">
      <div className="news__inner">
        <div className="news__left">
          <div className="signature">
            <p>#New</p>
          </div>
          <h2>What's New</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt natus nulla explicabo minima voluptatem quia?
            Accusantium, tempora vitae!
          </p>
          <div className="checks">
            <div className="check">
              <i class="fas fa-check"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ullam, voluptatum!
              </p>
            </div>
            <div className="check">
              <i class="fas fa-check"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ullam, voluptatum!
              </p>
            </div>
            <div className="check">
              <i class="fas fa-check"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ullam, voluptatum!
              </p>
            </div>
            <div className="check">
              <i class="fas fa-check"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ullam, voluptatum!
              </p>
            </div>
            <div className="check">
              <i class="fas fa-check"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ullam, voluptatum!
              </p>
            </div>
          </div>
        </div>
        <div className="news__right">
          <img
            src="https://images.unsplash.com/photo-1599493622108-f9471f8e9043?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1599493622108-f9471f8e9043?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1599493622108-f9471f8e9043?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default News;
