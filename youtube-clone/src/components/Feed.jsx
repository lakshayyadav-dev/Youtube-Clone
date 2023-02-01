import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Feed = () => {
	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
			<Box
				sx={{
					height: { sx: "auto", md: "92vh" },
					borderRight: "1px solid #1F1F1F",
					px: { sx: 0, md: 2 },
				}}
			>
                <Sidebar />

                <Typography className="copyright" varient="body2" sx={{mt:1.5, color:"#fff"}}>
                    Made by Lakshay Yadav
                </Typography>
            </Box>
		</Stack>
	);
};

export default Feed;
