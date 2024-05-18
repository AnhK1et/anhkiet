import React from "react";

const ChinhSachItem = (props) => {
  const Image = props.image;
  const Title = props.title;
  const Des = props.des;
  return (
    <div className="row">
      <div className="col-4">
        <img src={Image} className="img-fluid" alt="chinhsach1" />
      </div>
      <div className="col-8">
        <p className="p-0 m-0">
          <strong>{Title}</strong>
        </p>
        <p className="p-0 m-0">{Des}</p>
      </div>
    </div>
  );
};

export default ChinhSachItem;
