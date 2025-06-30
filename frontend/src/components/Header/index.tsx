import Image from "next/image";
import { useLocale } from "next-intl";
import * as Styled from "./styles";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/constants";
import { useMemo } from "react";
import Link from "../Link";

const Header = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const href = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return LOCALES.some(({ code }) => code === segments[0])
      ? "/" + segments.slice(1).join("/")
      : pathname;
  }, [pathname]);

  return (
    <Styled.Header component="header">
      <Image src="/logo.svg" width={157} height={50} alt="Logo image" />

      <Styled.LinksWrapper>
        {LOCALES.map(({ code, label }) => (
          <Link
            key={code}
            text={label}
            href={`/${code}${href}`}
            isLinkColor={locale === code}
          />
        ))}
      </Styled.LinksWrapper>
    </Styled.Header>
  );
};

export default Header;
