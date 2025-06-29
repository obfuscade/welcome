import MainImage from "../../../public/main.jpg";
import * as Styled from "./styles";

const Aside = () => {
  return <Styled.Image src={MainImage} priority alt="Main image" />;
};

export default Aside;
