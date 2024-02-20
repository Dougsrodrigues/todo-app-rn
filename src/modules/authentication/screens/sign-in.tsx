import React, { useRef } from 'react'
import { Button, Center, Container, Icon, VStack, useTheme } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { Typography } from '@/modules/app/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useForm, Controller } from 'react-hook-form'
import { useSignIn } from '../hooks/use-sign-in'
import { SignInSchemaData } from '../utils'
import { signInSchema } from '../utils/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/modules/app/components/input'

export function SignIn() {
  const theme = useTheme()
  const { handleSignIn, isLoading, showPassword, handleShowPassword } =
    useSignIn()

  const refKeyboardAwareScrollView = useRef<KeyboardAwareScrollView>(null)

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchemaData>({
    resolver: zodResolver(signInSchema),
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
              Log in using your email and password
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
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    autoComplete="off"
                    autoCapitalize="none"
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
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChangeText={onChange}
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
                        onPress={handleShowPassword}
                        as={<Feather name={showPassword ? 'eye' : 'eye-off'} />}
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
                isDisabled={isSubmitting || isLoading}
                isLoading={isSubmitting || isLoading}
                onPress={handleSubmit(handleSignIn)}
                background={theme.colors.christfy[600]}
              >
                Enter
              </Button>
              <Button variant="ghost" color={theme.colors.christfy[500]}>
                Sign Up
              </Button>
            </VStack>
          </Container>
          <Typography alignSelf={'center'}>Have any doubts? Help</Typography>
        </Center>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
