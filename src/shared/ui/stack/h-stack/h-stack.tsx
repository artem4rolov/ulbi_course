import { Flex, FlexProps } from '../flex/flex'

export type IHStackProps = Omit<FlexProps, 'direction'>

export const HStack = ({ children, ...props }: IHStackProps) => {
  return (
    <Flex direction="row" {...props}>
      {children}
    </Flex>
  )
}
