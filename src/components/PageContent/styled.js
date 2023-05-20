import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(45deg, #ff9d6c, #ff5f6d, #ff2079);
  background-size: 200% auto;
  animation: ${gradientAnimation} 6s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center; /* Wyśrodkowanie elementów w pionie */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    font-size: 1.4rem;
  }
`;
