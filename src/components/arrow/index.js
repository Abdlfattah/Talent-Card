import React from 'react'


function Arrow(props) {
    const { className, style, onClick, direction } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            display:"bolock",
            backgroundImage: 'none',
            backgroundImage: `url('./images/next/${direction}')`,
            backgroundRepeat:'no-repeat',
            height: 50,
            width:50,
        }}
        onClick={onClick}
      />
    );
  }

export default Arrow