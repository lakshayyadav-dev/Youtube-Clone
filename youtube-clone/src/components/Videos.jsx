import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
	return (
		<Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
			{videos.map((video, index) => (
				<Box key={index}>
					{video.id.channelId && <ChannelCard channelDetails={video} />}
					{(video.id.videoId || video.id.playlistId) && <VideoCard video={video} />}
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
