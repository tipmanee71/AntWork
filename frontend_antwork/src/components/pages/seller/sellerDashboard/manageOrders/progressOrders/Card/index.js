import React from "react";
import { styled, Paper, Typography } from "@mui/material";

const Root = styled(Paper)(({theme})=>({
	padding: 24,
	borderRadius: 16,
	transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
	boxShadow: "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
	["& .headerText"]: {
		marginRight: 8,
		marginBottom: 16,
		fontSize: 18,
		fontWeight: 500,
	},
	["& .subHeaderText"]: {
		marginBottom: 16,
		fontSize: 14,
		fontWeight: 500,
		color: "#9e9e9e",
	},
}))

const Card = ({children, title, style, subTitle}) => {
	return(
		<Root style={style}>
			{title && <Typography className="headerText" display="inline-block">{title}</Typography>}
			{subTitle && <Typography className="subHeaderText" display="inline-block">{subTitle}</Typography>}
			{children}
		</Root>
	)
}

export default Card;