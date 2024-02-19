import React, { useRef } from 'react'
import { Button, Center, Container, Icon, VStack, useTheme } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { Typography } from '../../app/components'
import { Input } from '../../app/components/input'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export function SignIn() {
  const theme = useTheme()

  const refKeyboardAwareScrollView = useRef<KeyboardAwareScrollView>(null)

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
              Seja bem-vindo
            </Typography>
            <Typography mt={1} color={theme.colors.black} textAlign="center">
              Faça o seu login usando o seu e-mail ou usuário
            </Typography>

            <VStack mt={6} w="100%" space={4}>
              <Input
                placeholder="Nome do usuário"
                label="Usuário"
                InputLeftElement={
                  <Icon
                    as={<Feather name="user" />}
                    size={5}
                    ml="2"
                    color="muted.500"
                  />
                }
              />
              <Input
                placeholder="Digite sua senha"
                label="Senha"
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

              <Button background={theme.colors.christfy[600]}>Entrar</Button>
            </VStack>
          </Container>
          <Typography alignSelf={'center'}>Ficou com dúvida? Ajuda</Typography>
        </Center>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
