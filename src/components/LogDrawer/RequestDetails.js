import React from 'react';
import {
  Stack,
  DrawerBody,
  Box,
  FormLabel,
  Text,
} from "@chakra-ui/react";

export default function RequestDetails({ activeLog }) {
  let requestData = JSON.stringify(activeLog.requestData);
  requestData = requestData === "{}" ? 'no data' : requestData;
  return (
    <DrawerBody>
      <Stack spacing="10px">
        <Box display="flex">
          <FormLabel>Timestamp:</FormLabel>
          <Text>{activeLog.timestamp}</Text>
        </Box>
        <Box display="flex">
          <FormLabel>Type:</FormLabel>
          <Text>{activeLog.class}</Text>
        </Box>
        <Box display="flex">
          <FormLabel>Method:</FormLabel>
          <Text>{activeLog.method}</Text>
        </Box>
        <Box display="flex">
          <FormLabel>Endpoint:</FormLabel>
          <Text>{activeLog.originalUri}</Text>
        </Box>
        <Box display="flex">
          <FormLabel>RequestData:</FormLabel>
          <Text>{requestData}</Text>
        </Box>
        <Box display="flex">
          <FormLabel>From IP:</FormLabel>
          <Text>{activeLog.fromIP}</Text>
        </Box>
      </Stack>
    </DrawerBody>
  );
}
