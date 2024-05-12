import React from 'react'
import UserTable from '../UserTable'
import CustomSeparator from './BreadCrumbs'
import { Box, Stack } from '@mui/material'

const Users = () => {
  return (
    <div>
      <CustomSeparator/>
      <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Stack>
      <UserTable />
    </div>
  )
}

export default Users