import type { ComponentProps } from "react";
import { Text } from "../Text"
import { TagContainer } from "./styles";

type TextProps = ComponentProps<typeof Text>

interface TagProps extends TextProps {
  className?: string
  tagValue: string
}

export function Tag({ className, tagValue }: TagProps) {
  return (
    <TagContainer className={className}>
      <Text color={"yellow"} text={tagValue} $variant={"tag"} />
    </TagContainer>
  )
} 