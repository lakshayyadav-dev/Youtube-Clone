import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				borderRadius: 5,
				border: "2px solid #434343",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
                display: "flex",
                alignItems:"center",
                color:"white"
			}}
		>
			<input
				className="search-bar"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<IconButton type="submit" sx={{ p: "10px", color: "red" }}>
				<Search />
			</IconButton>
		</Box>
	);
};

export default SearchBar;
