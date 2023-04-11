import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      {props.snakeDots.map((_dot, i) => {
        const style = {
          // eslint-disable-next-line no-template-curly-in-string
          left: "${dot[0]}%",
          // eslint-disable-next-line no-template-curly-in-string
          top: "${dot[1]}%",
        };
        return <div className="snake-dot" key={i} style={style}></div>;
      })}
    </div>
  );
};
