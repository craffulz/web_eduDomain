import React from "react";

const Support = () => {
  const supports = [{}];
  return (
    <div className="support">
      <h2>Support et Services</h2>
      <p>No se que 24/7</p>
      {supports.map((support, index) => {
        return (
          <React.Fragment key={index}>
            <h3>{support.h3}</h3>
            <p>
              {support.p}
              <a href=""></a>
            </p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Support;
