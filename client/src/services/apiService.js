import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const CreateApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://934b-2401-4900-1ca3-37db-540d-5295-1064-fde3.ngrok-free.app/api/v1",
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
    tagTypes: ["adminPanel", "links", "adminAffiliate", "assignCustomer", "profile"]
});

export default CreateApi;