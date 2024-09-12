import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const CreateApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://9522-2409-40c4-351-455a-f562-f59a-cb6f-9cad.ngrok-free.app/api/v1",
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
    tagTypes: ["adminPanel","links"]
});

export default CreateApi;