import CreateApi from "./apiService";

const AffiliateService = CreateApi.injectEndpoints(
    {
        endpoints: (builder) => (
            {
                GetAffiliateList: builder.query(
                    {
                        providesTags: ['affiliate'],
                        query: ({ Id, data }) => (
                            {
                                url:`/affiliate/list`,
                                method:"POST",
                                body:data
                            }
                        )
                    }
                ),
                AddAffiliateLink: builder.mutation(
                    {
                        providesTags: ['affiliate'],
                        query: ({ Id, data }) => (
                            {
                                url:`/affiliate/add`,
                                method:"POST",
                                body:data
                            }
                        )
                    }
                )
            }
        )
    }
);

export const { useGetAffiliateListQuery , useAddAffiliateLinkMutation} = AffiliateService;