import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"

function BootstrapButton({variant,text, onClick, className,to}) {
  return (
    <Link to={to}>
    <Button variant={variant} onClick={onClick } className={className} >
        {text}
    </Button>
    </Link>
  )
}

export default BootstrapButton;


BootstrapButton.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
}