import { Box, VStack, Flex, SimpleGrid } from "@chakra-ui/react";
import {
    useGetBearStudioTwitterStats,
    useGetStartUIGithubStats,
    useGetStartUINativeGithubStats,
    useGetStartUITwitterStats,
} from "../services/data";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Timeline } from "react-twitter-widgets";
import { Statistics } from "../components/Statistics";

export default function Home() {
    const {
        data: bearStudioTwitterStats,
        isLoading: isBearStudioTwitterStatsFetching,
        isError: isBearStudioTwitterStatsError,
    } = useGetBearStudioTwitterStats({
        refetchInterval: 60_000,
    });
    const {
        data: startUITwitterStats,
        isLoading: isStartUITwitterStatsFetching,
        isError: isStartUITwitterStatsError,
    } = useGetStartUITwitterStats({
        refetchInterval: 60_000,
    });
    const {
        data: startUIGithubStats,
        isLoading: isStartUIGithubStatsFetching,
        isError: isStartUIGithubStatsError,
    } = useGetStartUIGithubStats({
        refetchInterval: 60_000,
    });
    const {
        data: startUINativeGithubStats,
        isLoading: isStartUINativeGithubStatsFetching,
        isError: isStartUINativeGithubStatsError,
    } = useGetStartUINativeGithubStats({
        refetchInterval: 60_000,
    });

    return (
        <Box h="100vh">
            <SimpleGrid columns={2} spacing={4} h="full" m="2">
                <Statistics
                    icon={<FaGithub />}
                    type="github"
                    title="start-ui-web"
                    isLoading={isStartUIGithubStatsFetching}
                    isError={isStartUIGithubStatsError}
                    number={startUIGithubStats?.data}
                />
                <Statistics
                    icon={<FaGithub />}
                    type="github"
                    title="start-ui-native"
                    isLoading={isStartUINativeGithubStatsFetching}
                    isError={isStartUINativeGithubStatsError}
                    number={startUINativeGithubStats?.data}
                />
                <Statistics
                    icon={<FaTwitter color="#1DA1F2" />}
                    type="twitter"
                    title="@startui_"
                    isLoading={isStartUITwitterStatsFetching}
                    isError={isStartUITwitterStatsError}
                    number={startUITwitterStats?.data}
                />
                <Statistics
                    icon={<FaTwitter color="#1DA1F2" />}
                    type="twitter"
                    title="@_BearStudio"
                    isLoading={isBearStudioTwitterStatsFetching}
                    isError={isBearStudioTwitterStatsError}
                    number={bearStudioTwitterStats?.data}
                />
            </SimpleGrid>
        </Box>
    );
}
