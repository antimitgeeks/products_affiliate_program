import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const CreateApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://95b2-2401-4900-1ca2-1a1d-9dc2-df2e-a8e9-d3fd.ngrok-free.app/api/v1",
        prepareHeaders: (headers) => {
            const user = Cookies.get('isLogged');
            if (user) {
                headers.set("Authorization", `Bearer ${user}`);
            } else {
                console.warn("Token is missing or empty");
            }
            return headers;
        },
        mode: 'cors', // Ensure mode is set to 'cors'
    }),
    endpoints: () => ({}),
    tagTypes: ["adminPanel", "links", "adminAffiliate", "assignCustomer"]
});

export default CreateApi;