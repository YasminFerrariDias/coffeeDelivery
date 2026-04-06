import styled from "styled-components";

interface AdvantagesContainerProps {
  $IconVariant: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
}

export const AdvantagesContainer = styled.span<AdvantagesContainerProps>`
  display: flex;
  text-align: center;
  gap: 0.75rem;
  align-items: center;

  .icon {
    color: white;
    height: 2rem;
    width: 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 62.5rem;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;

    background: ${(props) => {
    switch (props.$IconVariant) {
      case 'yellow':
        return props.theme['yellow'];
      case 'yellow-dark':
        return props.theme['yellow-dark'];
      case 'gray':
        return props.theme['base-text'];
      case 'purple':
        return props.theme['purple-dark'];
      default:
        return props.theme['white'];
    }
  }}
}
`