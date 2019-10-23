import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SVG = styled.svg`
  margin: 1rem;
  height: ${props => props.height};
`

const SvgLogo = props => {
  return (
    <>
      <SVG
        fill={props.fill}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        height={props.height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 31"
      >
        <path d="M13 1l2 9-7 9 9 3 2 9-17-5-2-8L10 4zm12 29l-2-9 8-9-11-3-2-9 21 6 1 7z" />
      </SVG>
    </>
  )
}

SvgLogo.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  height: PropTypes.string,
}
export default SvgLogo
