import React from "react"
import PropTypes from "prop-types"

const Flex = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>
}

Flex.propTypes = {
  className: PropTypes.string,
}
export default Flex
