import React from "react";
// import bannerImage from "../../assets/banner.png"
import backgroundImage from "../../asset/background.jpg"

export default function BannerComponent() {
  return (
    <div
      id="intro-example"
      class="p-5 text-center bg-image banner_section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="mask">
        <div class="d-flex justify-content-center align-items-center">
          <div class="text-white">
            <h1 class="mb-3">Learn Bootstrap 5 with MDB</h1>
            <h5 class="mb-4">Best & free guide of responsive web design</h5>
            <a
              class="btn btn-outline-light btn-lg m-2"
              href="https://www.youtube.com/watch?v=c9B4TPnak1A"
              role="button"
              rel="nofollow"
              target="_blank"
            >
              Start tutorial
            </a>
            <a
              class="btn btn-outline-light btn-lg m-2"
              href="https://mdbootstrap.com/docs/standard/"
              target="_blank"
              role="button"
            >
              Download MDB UI KIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}