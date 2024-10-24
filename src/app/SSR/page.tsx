import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import SSRMovies from "../components/SSRMovies";
import getMoviesData from "@/apis/getMoviesData";

export const metadata = {
  title: "SSR Page",
  description: "This is the Rendered page for SSR.",
};

const SSR = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["moviesSSR"],
    queryFn: getMoviesData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SSRMovies />
    </HydrationBoundary>
  );
};

export default SSR;
