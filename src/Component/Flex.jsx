import React from "react";

function Flex() {
  return (
    <div className="flex-container">
      <div>
        <img
          src="/images/desktop/image-interactive.jpg"
          alt=""
          className="virtual-img"
        />
      </div>

      <div className="virtual-container">
        <h1 className="virtual-heading">THE LEADER IN INTERACTIVE VR</h1>

        <p className="virtual-para">
          Founded in 2011 loopstudios has been producing world-class virtual
          reality projects for some of the best compaines around the globe. Our
          award winning creations have transformed business through digital
          experinces that bind to their brand
        </p>
      </div>
    </div>
  );
}

export default Flex;
