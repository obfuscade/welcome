"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header";
import Footer from "../Footer";
import Aside from "../Aside";
import { PATH } from "../../constants";
import * as Styled from "./styles";

const Root = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const isRegisterPage = pathname === PATH.REGISTER;

  return (
    <Styled.GridWrapper
      container
      columnSpacing={"6rem"}
      isregister={String(isRegisterPage)}
    >
      <Styled.GridLayoutWrapper size={{ xs: 12, md: 6 }}>
        {!isRegisterPage ? <Header /> : null}

        <main>{children}</main>

        {!isRegisterPage ? <Footer /> : null}
      </Styled.GridLayoutWrapper>

      <Styled.GridAsideWrapper
        size={{ xs: 0, md: 6 }}
        isregister={String(isRegisterPage)}
      >
        <Aside />
      </Styled.GridAsideWrapper>
    </Styled.GridWrapper>
  );
};

export default Root;
