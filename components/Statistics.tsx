import { Alert, AlertDescription, AlertIcon, AlertTitle, Center, Flex, Spinner, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export const Statistics = ({ icon, title, number, isLoading, isError, type, ...otherProps }) => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="space-between"
            padding="4"
            w="full"
            {...otherProps}
        >
            <Flex flexDirection="column" h="full">
                <Center h="full" flexDirection="column">
                    {isLoading && !isError ? (
                        <Spinner size="xl" thickness="4px" my="20" color="gray.300" />
                    ) : (
                        <Flex alignItems="center">
                            {type === "github" && (
                                <Text fontSize="8rem" pr="12" color="yellow.400">
                                    <FaStar />
                                </Text>
                            )}
                            <Text fontSize="10rem" fontWeight="black">
                                {number || "N/A"}
                            </Text>
                            {type === "twitter" && (
                                <Text fontSize="4rem" pl="12" pt="14" color="gray.400">
                                    Followers
                                </Text>
                            )}
                        </Flex>
                    )}
                    <Flex alignItems="center" fontSize="6xl" fontWeight="bold" mt="-8" color="gray.700">
                        {icon}
                        <Text pl="6">{title}</Text>
                    </Flex>
                </Center>
            </Flex>
            {isError && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>An error occurred</AlertTitle>
                    <AlertDescription>An error occurred while trying to refresh data</AlertDescription>
                </Alert>
            )}
        </Flex>
    );
};
