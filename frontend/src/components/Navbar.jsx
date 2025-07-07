import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Container maxW="1140px" p={4}>
      <Flex>
        h={16}
        alignItems="center"
        justifyContent="space-between"
        {/* flexDir={
          { base: 'column', md: 'row' }
        } */}
      </Flex>
    </Container>

  )
}
