import { Box, ImageList, ImageListItem, ImageListItemBar, Skeleton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Newsdata } from './Newsdata';

// 20220607021526
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=59709500aed94438b727fa7766778f6a


const News = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, [3000]);

    return (
        <Box>
            <Typography variant="h6" fontWeight="200" mt={2} mb={2}>
                BBC: Latest News
            </Typography>

            {loading ? (
                <Stack spacing={1}>
                    <Skeleton variant="rectangular" height={20} />
                    <Skeleton variant="rectangular" height={20} />
                    <Skeleton variant="rectangular" height={20} />
                    <Skeleton variant="rectangular" height={20} />
                </Stack>
            ) : (
                <ImageList sx={{ width: 280, height: 600, }} cols={2}   >
                    {Newsdata.map((news) => (
                        <ImageListItem key={news.title}>
                            <img
                                src={`${news.urlToImage}`}
                                srcSet={`${news.urlToImage}`}
                                alt={news.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={news.title}
                                subtitle={<span>by: {news.author}</span>}
                                position="left"
                            />

                        </ImageListItem>
                    ))}
                </ImageList>
            )}
        </Box>
    )
}

export default News