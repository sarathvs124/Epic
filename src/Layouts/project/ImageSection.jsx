import React from "react";

const ImageSection = ({ image }) => {
  const { src } = image;

  return (
    <>
      <div className="container">
        <h1 className="my-8 border-l-8 border-violet-800 py-2 pl-2 text-3xl font-semibold">
          Explore Our Stunning Home Gallery
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src[5]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src[4]}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src[0]}
                alt=""
              />
            </div>
            <div>
              <video
                className="h-auto max-w-full rounded-lg"
                autoPlay
                muted
                loop
              >
                <source src={src[8]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src[3]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src[6]}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src[7]}
                alt=""
              />
            </div>
            <div>
              <video
                className="h-auto max-w-full rounded-lg"
                autoPlay
                muted
                loop
              >
                <source src={src[9]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Add some space below the gallery */}
      <div style={{ height: "50px" }}></div>
    </>
  );
};

export default ImageSection;
