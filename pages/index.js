import { Box, Stat, StatLabel, StatNumber, StatHelpText, Text, VStack, Flex } from "@chakra-ui/react";
import { useGetGitHubStats } from "../services/data";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Timeline } from "react-twitter-widgets";

export default function Home() {
    const { data, isFetching, isError } = useGetGitHubStats({
        refetchInterval: 60000,
    });
    const { data: stats } = data || { data: null };
    const { startUi, startUiNative, startUiFollowers, bearstudioFollowers } = stats || {
        startUi: "N/A",
        startUiNative: "N/A",
        startUiFollowers: "N/A",
        bearstudioFollowers: "N/A",
    };

    return (
        <Box h="100vh">
            {isError && <Text>An error occurred</Text>}
            <Flex>
                <VStack spacing="4" flex="2" padding="4">
                    <Stat boxShadow="md" borderRadius="md" padding="4" w="full">
                        <StatLabel fontSize="3xl">
                            <Flex alignItems="center">
                                <FaGithub />
                                <Text pl="2">Start UI - GitHub</Text>
                            </Flex>
                        </StatLabel>
                        <StatNumber fontSize="8xl">{startUi}</StatNumber>
                        <StatHelpText>{isFetching ? "Refreshing..." : ""}</StatHelpText>
                    </Stat>
                    <Stat boxShadow="md" borderRadius="md" padding="4" w="full">
                        <StatLabel fontSize="3xl">
                            <Flex alignItems="center">
                                <FaGithub />
                                <Text pl="2">Start UI Native - GitHub</Text>
                            </Flex>
                        </StatLabel>
                        <StatNumber fontSize="8xl">{startUiNative}</StatNumber>
                        <StatHelpText>{isFetching ? "Refreshing..." : ""}</StatHelpText>
                    </Stat>
                    <Stat boxShadow="md" borderRadius="md" padding="4" w="full">
                        <StatLabel fontSize="3xl">
                            <Flex alignItems="center">
                                <FaTwitter />
                                <Text pl="2">Start UI Twitter followers</Text>
                            </Flex>
                        </StatLabel>
                        <StatNumber fontSize="8xl">{startUiFollowers}</StatNumber>
                        <StatHelpText>{isFetching ? "Refreshing..." : ""}</StatHelpText>
                    </Stat>
                    <Stat boxShadow="md" borderRadius="md" padding="4" w="full">
                        <StatLabel fontSize="3xl">
                            <Flex alignItems="center">
                                <FaTwitter />
                                <Text pl="2">BearStudio followers</Text>
                            </Flex>
                        </StatLabel>
                        <StatNumber fontSize="8xl">{bearstudioFollowers}</StatNumber>
                        <StatHelpText>{isFetching ? "Refreshing..." : ""}</StatHelpText>
                    </Stat>
                </VStack>
                <Box p="4" flex="1" maxH="100vh">
                    <Timeline
                        dataSource={{
                            sourceType: "url",
                            url: "https://twitter.com/startui_?ref_src=twsrc%5Etfw",
                        }}
                        options={{ width: "auto" }}
                    />
                </Box>
            </Flex>
        </Box>
    );
}
