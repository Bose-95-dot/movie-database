import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://movies-api14.p.rapidapi.com/',
        prepareHeaders(headers) {
            headers.set('x-rapidapi-key', '8b7f91d14amsh81a38a918b8dc2cp1f7834jsn1012c2719d04');
            return headers;
        },
    }),
    endpoints: (builder) => ({

        getHomeMovieList: builder.query({
            query: () => `movies`
        })


    })

})