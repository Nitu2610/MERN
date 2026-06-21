import { Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Loading = () => {
  return (
    <VStack colorPalette="teal">
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600">Loading...</Text>
    </VStack>
  )
}
