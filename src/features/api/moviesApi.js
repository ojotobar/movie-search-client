import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../settings/settings';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/movies`
    }),
    tagTypes: ['Movie'],
    endpoints: (builder) => ({
        getMovieByTitle: builder.query({
            query: (title) => `/?Title=${title}`,
            providesTags: ['Movie']
        }),
        getMovieById: builder.query({
            query: (id) => `/${id}`,
            invalidatesTags: ['Movie']
        })
    })
});

export const {
    useGetMovieByTitleQuery,
    useGetMovieByIdQuery
} = movieApi;