import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import  Trailer  from "../entities/Trailer";


const useGameTrailer = (id: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);

    return useQuery({
        queryKey: ['trailer', id],
        queryFn: apiClient.getAll,
    
})
}





export default useGameTrailer;















// const useGameTrailer = (slug: string) => useQuery({
//     queryKey: ['trailer', slug],
//     queryFn: () => apiClient.getTrailer(slug),

// })