import { Box } from "@mui/material";
import * as Styled from "./styles";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <Box component="footer">
      <Styled.Text variant="body2">{t("text")}</Styled.Text>
    </Box>
  );
};

export default Footer;
