import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowUpCircle } from "react-icons/bs";

const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 96%;
  bottom: 30px;
  height: 30px;
  z-index: 1;
  cursor: pointer;
  @media (max-width: 768px) {
    left: 87%;
  }
`;

const StyledArrow = styled(BsArrowUpCircle)`
  fill: #e60a08;
  font-size: 2.2rem;
  border-radius: 50%;
  border: none;
  &:hover {
    background-color: #e60a08;
    fill: grey;
  }
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <StyledArrow
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
        }}
        className="scroll-button"
      />
    </Button>
  );
};

export default ScrollButton;
