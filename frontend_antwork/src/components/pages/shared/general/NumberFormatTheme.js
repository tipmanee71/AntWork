import React from "react";
import NumberFormat from "react-number-format";

const NumberFormatTheme = React.forwardRef((props, ref) => {
  return <NumberFormat {...props} getInputRef={ref}/>
})

export default NumberFormatTheme