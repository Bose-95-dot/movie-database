import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Item from '../common/ItemComponent';
import Carasoul from '../common/carasoul';
import { Button } from '@mui/material';

// interface MovieData {
//     id: number; // Adjust this according to your API response structure
//     title: string; // Example property, adjust based on the API data
//     [key: string]: any; // To accommodate additional fields
// }

export function ResponsiveGrid({ movieData }: { movieData: MovieData }) {
    const _handleClick = (value: any) => {
        console.log('clicked');
    }
    return (
        <Box sx={{

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px', flexGrow: 1, marginBottom: 2
        }}>

            <Grid xs={2}>
                <Button variant="contained" color="primary" size="small" onClick={_handleClick}>
                    {movieData.title}
                </Button>


            </Grid>
        </Box>
    );
}


function Home() {
    const [movieList, setMovieList] = useState<MovieData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const homeOptions = {
                method: 'GET',
                url: 'https://movies-api14.p.rapidapi.com/home',
                headers: {
                    'x-rapidapi-key': '8b7f91d14amsh81a38a918b8dc2cp1f7834jsn1012c2719d04',
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com',
                },
            };

            try {
                const response = await axios.request(homeOptions);
                if (response.data?.length > 0) {
                    setMovieList(response.data);
                } else {
                    console.log('No movies in the database');
                }
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Box sx={{
                background: 'linear-gradient(to bottom, #000000, #1a1a1a)', // Dark gradient background
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '20px',
                flexGrow: 1,
                marginBottom: 2
            }}>
                <Carasoul />
                <Grid container >
                    {movieList.length > 0 ? (

                        movieList.map((data, index) => (

                            <ResponsiveGrid key={data.id || index} movieData={data} />

                        ))

                    )
                        : (
                            <Typography variant="h6" textAlign="center" marginTop={4}>
                                No movies available.
                            </Typography>
                        )} </Grid>
            </Box>

        </>
    );
}

export default Home;
