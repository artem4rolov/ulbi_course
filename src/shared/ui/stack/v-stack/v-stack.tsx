import { Flex, FlexProps } from '../flex/flex'

export type IVStackProps = Omit<FlexProps, 'direction'>

export const VStack = ({ children, ...props }: IVStackProps) => {
  const { align = 'start' } = props
  return (
    <Flex direction="column" align={align} {...props}>
      {children}
    </Flex>
  )
}
