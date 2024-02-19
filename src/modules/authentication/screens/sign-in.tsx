import React, { useRef } from 'react'
import { Button, Center, Container, Icon, VStack, useTheme } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { Typography } from '../../app/components'
import { Input } from '../../app/components/input'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useForm, Controller } from 'react-hook-form'
import { useSignIn } from '../hooks/useSignIn'
import { SignInSchemaData } from '../utils'
import { signInSchema } from '../utils/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

export function SignIn() {
  const theme = useTheme()
  const { handleSignIn } = useSignIn()

  const refKeyboardAwareScrollView = useRef<KeyboardAwareScrollView>(null)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <KeyboardAwareScrollView
        enableAutomaticScroll
        ref={refKeyboardAwareScrollView}
        onKeyboardDidShow={() => {
          refKeyboardAwareScrollView?.current?.scrollToEnd()
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Center flex={1}>
          <Container
            justifyContent="center"
            flex={1}
            w="100%"
            alignItems="center"
          >
            <Typography variant="title" mt={6} color={theme.colors.black}>
              Welcome
            </Typography>
            <Typography mt={1} color={theme.colors.black} textAlign="center">
              Log in using your email or username
            </Typography>

            <VStack mt={6} w="100%" space={4}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    error={errors?.email && errors.email.message}
                    placeholder="Type your e-mail"
                    label="E-mail"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    InputLeftElement={
                      <Icon
                        as={<Feather name="user" />}
                        size={5}
                        ml="2"
                        color="muted.500"
                      />
                    }
                  />
                )}
                name="email"
              />

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Type your password"
                    label="Senha"
                    error={errors?.password && errors.password.message}
                    InputLeftElement={
                      <Icon
                        as={<Feather name="lock" />}
                        size={5}
                        ml="2"
                        color="muted.500"
                      />
                    }
                    InputRightElement={
                      <Icon
                        as={<Feather name="eye-off" />}
                        size={5}
                        mr="2"
                        color="muted.500"
                      />
                    }
                  />
                )}
                name="password"
              />

              <Button
                onPress={handleSubmit(handleSignIn)}
                background={theme.colors.christfy[600]}
              >
                Enter
              </Button>
            </VStack>
          </Container>
          <Typography alignSelf={'center'}>Have any doubts? Help</Typography>
        </Center>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
