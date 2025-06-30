import NextLink from "next/link";
import { memo } from "react";
import * as Styled from "./styles";

interface IProps {
  href: string;
  text: string;
  isLinkColor?: boolean;
}

const Link = ({ href, text, isLinkColor }: IProps) => {
  return (
    <Styled.Link
      component={NextLink}
      href={href}
      variant="text"
      fullWidth={false}
      islinkcolor={String(isLinkColor)}
    >
      {text}
    </Styled.Link>
  );
};

export default memo(Link);
