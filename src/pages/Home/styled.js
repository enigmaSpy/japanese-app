import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  border: 2px solid #333;
  border-radius: 5px;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
    color: white;
  &:hover {
    background-color: #333;
    color: #fff;
  }
`;