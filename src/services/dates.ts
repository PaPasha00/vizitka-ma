import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://192.168.22.107:8000/api/'

export const getDate = createApi({
  reducerPath: 'getDate',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAvailableTimes: builder.query<any, any>({
      query: () => 'time-slots/?format=json',
    }),
  }),
})

export const { useGetAvailableTimesQuery } = getDate