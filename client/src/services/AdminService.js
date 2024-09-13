import CreateApi from "./apiService";

const AdminService = CreateApi.injectEndpoints(
    {
        endpoints: (builder) => (
            {
                GetUserList: builder.query(
                    {
                        providesTags: ['admin'],
                        query: ({ Id, data }) => (
                            {
                                url: `/admin/allUsers`,
                                method: "POST",
                                body: data
                            }
                        )
                    }
                ),
                AddInvoice: builder.mutation(
                    {
                        invalidatesTags: ['admin'],
                        query: ({ Id, data }) => (
                            {
                                url: `/invoice/createInvoice`,
                                method: "POST",
                                body: data
                            }
                        )
                    }
                ),
                GetIndividualInvoiceList: builder.query(
                    {
                        providesTags: ["admin"],
                        query: ({ Id, data }) => (
                            {
                                url: `/invoice/userInvoiceList/${Id}`,
                                method: "POST",
                                body: data
                            }
                        )
                    }
                ),
                UpdateInvoiceStatus: builder.mutation(
                    {
                        invalidatesTags: ['admin'],
                        query: ({ Id, data }) => (
                            {
                                url: `/invoice/updateStatus/${Id}`,
                                method: "PUT",
                                body: data
                            }
                        )
                    }
                ),
            }
        )
    }
);

export const { useGetUserListQuery, useAddInvoiceMutation, useGetIndividualInvoiceListQuery , useUpdateInvoiceStatusMutation } = AdminService;