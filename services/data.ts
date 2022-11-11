import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetGitHubStats = (config) => {
    const result = useQuery(["github"], () => axios.get("/api/github"), { keepPreviousData: true, ...config });
    return result;
};
