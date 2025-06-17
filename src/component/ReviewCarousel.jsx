import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReviewCarousel = ({ reviews }) => {
  const scrollRef = useRef(null);
  const scrollAmount = 850; // Matches the width of wrapper

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="review-carousel">
      <FaChevronLeft onClick={scrollLeft} className="arrow" />

      <div className="review-cards-wrapper">
        <div className="review-cards" ref={scrollRef}>
          {reviews.map((r, i) => (
            <div className="card" key={i}>
              <div className="review-header">
                <img src={r.img} alt={r.name} />
                <div>
                  <strong>{r.name}</strong>
                  <small>{r.time}</small>
                </div>
              </div>
              <p>{r.text}</p>
              <div className="stars">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <FaChevronRight onClick={scrollRight} className="arrow" />
    </div>
  );
};

export default ReviewCarousel;
