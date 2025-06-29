import NextLink from "next/link";
import { memo } from "react";
import { Button } from "@mui/material";

interface IProps {
  href: string;
  text: string;
}

const Link = ({ href, text }: IProps) => {
  return (
    <Button component={NextLink} href={href} variant="text" fullWidth={false}>
      {text}
    </Button>
  );
};

export default memo(Link);
