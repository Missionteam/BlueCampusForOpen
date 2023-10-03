import React, { useState, useEffect, ReactNode } from "react";
import { useSwipeable } from "react-swipeable";

interface SwipeComponentProps {
  children: ReactNode[];
}

const SwipeComponent: React.FC<SwipeComponentProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoSwipe, setIsAutoSwipe] = useState(true);

  const handleSwipeLeft = () => {
    if (!isAutoSwipe && activeIndex < children.length - 1) {
      setActiveIndex(activeIndex + 1);
      setIsAutoSwipe(false);
    }
  };

  const handleSwipeRight = () => {
    if (!isAutoSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setIsAutoSwipe(false);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isAutoSwipe && activeIndex === 0) {
      timer = setInterval(() => {
        setActiveIndex(1);
        setIsAutoSwipe(false);
      }, 3000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isAutoSwipe, activeIndex]);

  return <div {...handlers}>{children[activeIndex]}</div>;
};

export default SwipeComponent;
