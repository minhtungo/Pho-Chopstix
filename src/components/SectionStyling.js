import styled from "styled-components";

export const StyledSection = styled.div`
  text-align: left;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-family: "Poppins", sans-serif;
  &:after {
    content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    font-size: 1.5rem;
    background: rgba(255, 255, 255, 0.2);
    margin: 4px 10px;
  }
`;

export const SectionDesc = styled.p`
  margin: 0;
  margin-bottom: 15px;
  text-align: center;
  font-size: 1.3rem;
  color: rgb(255, 31, 64);
`;
