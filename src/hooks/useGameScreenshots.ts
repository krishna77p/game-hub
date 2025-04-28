import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { screenshots } from "../entities/Screenshot";

const useGameScreenshots = (gameId: number) => {
    const apiClient = new APIClient<screenshots>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll,
    })


}

export default useGameScreenshots;