import React, { useEffect, useState } from 'react';

function YourComponent() {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [isGoTopActive, setGoTopActive] = useState(false);

  useEffect(() => {
    // element toggle function
    const elemToggleFunc = function (elem) {
      elem.classList.toggle("active");
    };

    // header sticky & go to top
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setHeaderActive(true);
        setGoTopActive(true);
      } else {
        setHeaderActive(false);
        setGoTopActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []); // Empty dependency array ensures the effect runs once on mount

  // ... (similarly, you can convert other parts of your code into React)

  return (
    <div>
      {/* Your React JSX content */}
    </div>
  );
}

export default YourComponent;
