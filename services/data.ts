import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetStartUITwitterStats = (config) =>
    useQuery(["twitter", "start-ui"], () => axios.get("/api/stats/twitter/start-ui"), { keepPreviousData: true, ...config });

export const useGetBearStudioTwitterStats = (config) =>
    useQuery(["twitter", "bearstudio"], () => axios.get("/api/stats/twitter/bearstudio"), {
        keepPreviousData: true,
        ...config,
    });

export const useGetStartUIGithubStats = (config) =>
    useQuery(["github", "start-ui"], () => axios.get("/api/stats/github/start-ui"), { keepPreviousData: true, ...config });

export const useGetStartUINativeGithubStats = (config) =>
    useQuery(["github", "start-ui-native"], () => axios.get("/api/stats/github/start-ui-native"), {
        keepPreviousData: true,
        ...config,
    });
