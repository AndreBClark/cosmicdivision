import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SVG = styled.svg`
  margin: 0 1rem;
`;

const SvgLogo = props => {
  return (
    <>
      <SVG
        fill={props.fill}
        stroke={props.stroke}
        height={props.height}
        strokeWidth={props.strokeWidth}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 450"
        height="60px"
      >
        <path d="M160 16l23 110-86 115 118 37 23 110-219-69-19-92L130 56l30-40zm158 355l-26-110 97-114-133-39L231 0l260 76 9 84-182 211z"/>
      </SVG>
    </>
  );
};

SvgLogo.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  height: PropTypes.string,
  strokeWidth: PropTypes.string,
}
export default SvgLogo
