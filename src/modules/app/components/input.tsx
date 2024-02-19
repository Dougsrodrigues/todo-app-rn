import {
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  MutableRefObject,
  forwardRef,
} from 'react'
import { TextInput } from 'react-native'
import { Box, Input as InputNativeBase, useTheme } from 'native-base'
import { Typography } from './typography'
import { RFValue } from '../infra/lib/rfvalue'

interface InputProps extends ComponentPropsWithRef<typeof InputNativeBase> {
  label?: string
}

const InputBase: ForwardRefRenderFunction<TextInput, InputProps> = (
  { label, ...props },
  ref,
) => {
  const theme = useTheme()
  return (
    <Box w="100%">
      <Typography variant="label" color={theme.colors.gray[100]}>
        {label}
      </Typography>
      <InputNativeBase
        {...props}
        height={`${RFValue(42)}px`}
        ref={ref as MutableRefObject<TextInput> | undefined}
      />
    </Box>
  )
}

export const Input = forwardRef(InputBase)
