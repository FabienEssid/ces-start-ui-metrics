import { Box, Stat, StatLabel, StatNumber, StatHelpText, Text, VStack, Flex } from "@chakra-ui/react";
import { useGetGitHubStats } from "../services/data";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
    const { data, isFetching } = useGetGitHubStats({
        // refetchInterval: 30000,
    });
    console.log({ data });
    const { data: stats } = data || { data: null };
    const { startUi, startUiNative, startUiFollowers } = stats || {
        startUi: "N/A",
        startUiNative: "N/A",
        startUiFollowers: "N/A",
    };

    return (
        <Box>
            <VStack spacing="4" width="full" padding="4">
                <Stat boxShadow="md" borderRadius="md" padding="4" w="full" h="full">
                    <StatLabel fontSize="3xl">
                        <Flex alignItems="center">
                            <FaGithub />
                            <Text pl="2">Start UI - GitHub</Text>
                        </Flex>
                    </StatLabel>
                    <StatNumber fontSize="8xl">{startUi}</StatNumber>
                    <StatHelpText>{isFetching ? "Loading..." : ""}</StatHelpText>
                </Stat>
                <Stat boxShadow="md" borderRadius="md" padding="4" w="full" h="full">
                    <StatLabel fontSize="3xl">
                        <Flex alignItems="center">
                            <FaGithub />
                            <Text pl="2">Start UI Native - GitHub</Text>
                        </Flex>
                    </StatLabel>
                    <StatNumber fontSize="8xl">{startUiNative}</StatNumber>
                    <StatHelpText>{isFetching ? "Loading..." : ""}</StatHelpText>
                </Stat>

                <Stat boxShadow="md" borderRadius="md" padding="4" w="full" h="full">
                    <StatLabel fontSize="3xl">
                        <Flex alignItems="center">
                            <FaTwitter />
                            <Text pl="2">Start UI Twitter followers</Text>
                        </Flex>
                    </StatLabel>
                    <StatNumber fontSize="8xl">{startUiFollowers}</StatNumber>
                    <StatHelpText>{isFetching ? "Loading..." : ""}</StatHelpText>
                </Stat>
            </VStack>
        </Box>
    );
}
