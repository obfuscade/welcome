import { PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Aside from "../Aside";
import * as Styled from "./styles";

const Root = ({ children }: PropsWithChildren) => {
  return (
    <Styled.GridWrapper container columnSpacing={"6rem"}>
      <Styled.GridLayoutWrapper size={{ xs: 12, md: 6 }}>
        <Header />

        <main>{children}</main>

        <Footer />
      </Styled.GridLayoutWrapper>

      <Styled.GridAsideWrapper size={{ xs: 0, md: 6 }}>
        <Aside />
      </Styled.GridAsideWrapper>
    </Styled.GridWrapper>
  );
};

export default Root;
