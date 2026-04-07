import type { ComponentProps } from "react";
import type { DefaultTheme } from "styled-components/dist/types";
import { Text } from "../Text"
import { TagContainer } from "./styles";

type TextProps = ComponentProps<typeof Text>

interface TagProps extends TextProps {
  BackgroundColor: keyof DefaultTheme
  className?: string
}

export function Tag({ className, BackgroundColor, color, text, variant }: TagProps) {
  return (
    <TagContainer $BackgroundColor={BackgroundColor} className={className}>
      <Text color={color} text={text} variant={variant} />
    </TagContainer>
  )
}