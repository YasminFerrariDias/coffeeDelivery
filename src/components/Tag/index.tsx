import type { ComponentProps } from "react";
import { Text } from "../Text"
import { TagContainer } from "./styles";

type TextProps = Omit<ComponentProps<typeof Text>, 'text' | 'color' | '$variant'>

interface TagProps extends TextProps {
  className?: string
  tagValue: string
}

export function Tag({ className, tagValue, ...textProps }: TagProps) {
  return (
    <TagContainer className={className}>
      <Text {...textProps} color={"yellow"} text={tagValue} $variant={"tag"}  />
    </TagContainer>
  )
} 