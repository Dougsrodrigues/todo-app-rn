import { Text as NBText, useTheme } from 'native-base'
import * as React from 'react'
import { ComponentPropsWithoutRef } from 'react'

export interface TextProps extends ComponentPropsWithoutRef<typeof NBText> {
  variant?: 'text' | 'label' | 'title'
}

export function Typography({ variant, ...props }: TextProps) {
  const theme = useTheme()

  const style = React.useMemo(() => {
    switch (variant) {
      case 'text':
        return {
          fontSize: 'extraMedium',
          fontFamily: theme.fonts.Archivo,
          fontWeight: '400',
        }
      case 'label':
        return {
          fontSize: 'medium',
          fontFamily: theme.fonts.Archivo,
          fontWeight: '500',
        }

      case 'title':
        return {
          fontSize: 'extraLarge',
          fontFamily: theme.fonts.Archivo,
          fontWeight: '700',
        }

      default:
        return {
          fontSize: 'extraMedium',
          fontFamily: theme.fonts.Archivo,
          fontWeight: '400',
        }
    }
  }, [variant])

  return <NBText {...style} {...props} />
}
