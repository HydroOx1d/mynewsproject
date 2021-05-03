import React, { useState, useEffect } from "react";
import "./Slider.css";

function Slider() {
  const span = [
    <span>Здравоохранение</span>,
    <span>Спорт</span>,
    <span>Тазалык</span>,
    <span>ГАИ</span>,
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === span.length - 1 ? 0 : current + 1;
        return res;
      });
    }, 3000);
    return () => clearInterval();
  }, []);

  const prevSpanIndex = activeIndex ? activeIndex - 1 : span.length - 1;
  const nextSpanIndex = activeIndex === span.length - 1 ? 0 : activeIndex + 1;
  return (
    <div className="slider">
      <div className="slider-name slider-name-prev" key={prevSpanIndex}>
        {span[prevSpanIndex]}
      </div>
      <div className="slider-name" key={activeIndex}>
        {span[activeIndex]}
      </div>
      <div className="slider-name slider-name-next" key={nextSpanIndex}>
        {span[nextSpanIndex]}
      </div>
    </div>
  );
}

export default Slider;
