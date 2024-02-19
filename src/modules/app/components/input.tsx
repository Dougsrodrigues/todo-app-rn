import {
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  MutableRefObject,
  forwardRef,
} from 'react'
import { TextInput } from 'react-native'
import {
  Box,
  FormControl,
  Input as InputNativeBase,
  useTheme,
} from 'native-base'
import { Typography } from './typography'
import { RFValue } from '../infra/lib/rfvalue'

interface InputProps extends ComponentPropsWithRef<typeof InputNativeBase> {
  label?: string
  error?: string
}

const InputBase: ForwardRefRenderFunction<TextInput, InputProps> = (
  { label, error, ...props },
  ref,
) => {
  const theme = useTheme()
  return (
    <Box w="100%">
      <FormControl isRequired isInvalid={!!error}>
        <Typography variant="label" color={theme.colors.gray[100]}>
          {label}
        </Typography>
        <InputNativeBase
          {...props}
          height={`${RFValue(42)}px`}
          ref={ref as MutableRefObject<TextInput> | undefined}
        />
        {error && <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>}
      </FormControl>
    </Box>
  )
}

export const Input = forwardRef(InputBase)
