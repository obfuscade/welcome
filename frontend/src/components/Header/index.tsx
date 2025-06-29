import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src="/logo.svg" width={157} height={50} alt="Logo image" />
    </header>
  );
};

export default Header;
