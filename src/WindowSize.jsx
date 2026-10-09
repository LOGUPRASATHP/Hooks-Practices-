import { useEffect, useState } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth); useEffect(() => {
    const handleResize = () => { 
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => { 
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  return (
    <div> 
      <h2>Browser Window Size</h2> 
      <p>Current width: {width}px</p> 
    </div>
  );
}

export default WindowSize;