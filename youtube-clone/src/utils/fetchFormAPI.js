import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	url: BASE_URL,
	params: { maxResults: "50" },
	headers: {
		"X-RapidAPI-Key": "2815939226mshc2ffb458d18b9abp1410eajsn8ff3042f8a41",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
