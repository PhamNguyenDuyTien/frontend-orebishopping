import React from "react"
import PropTypes from "prop-types"

const Image = ({ imgSrc, className }) => {
  return <img className={className} src={imgSrc} alt={imgSrc} />
}

Image.propTypes = {
  className: PropTypes.string,
}
export default Image
