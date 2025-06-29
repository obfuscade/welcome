import { Box } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <Box component="header">
      <Image src="/logo.svg" width={157} height={50} alt="Logo image" />
    </Box>
  );
};

export default Header;
