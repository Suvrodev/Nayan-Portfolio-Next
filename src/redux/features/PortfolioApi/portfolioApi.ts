import { baseApi } from "@/redux/apis/baseApi";

const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPortfolio: builder.query({
      query: () => {
        console.log("Get All Portfolio");
        return {
          url: "/portfolioo",
        };
      },
    }),
  }),
});

export const { useGetAllPortfolioQuery } = portfolioApi;
