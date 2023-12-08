import { useState } from "react"; // Це тимчасово, потрыбно видалити
import { LearnMoreBtn } from "../button/LearnMoreBtn/LearnMoreBtn";
import {
  DescriptWrapper,
  Description,
  Descriptions,
  ImageWrapper,
  Make,
  Title,
} from "./ListItem.styled";
import { ReactComponent as Active } from "../../icons/active.svg";
import { ReactComponent as Normal } from "../../icons/normal.svg";

export const ListItem = ({ value }) => {
  const [isActive, setIsActive] = useState(false);
  const test = (e) => {
    // console.dir(e);
    setIsActive((isActive) => !isActive);
    console.log(isActive);
  };
  const city = value.address.split(",").slice(1, 2).join("").trim();
  const country = value.address.split(",").slice(2).join("").trim();
  return (
    <>
      <ImageWrapper>
        <img src={value.img} alt={value.make} />
        <button onClick={test}>{isActive ? <Active /> : <Normal />}</button>
      </ImageWrapper>
      <div>
        <Title>
          <span>
            {value.make} <Make>{value.model}</Make>, {value.year}
          </span>
          <span>{value.rentalPrice}</span>
        </Title>
        <DescriptWrapper>
          <Description>{city}</Description>
          <Description>{country}</Description>
          <Description>{value.rentalCompany}</Description>
          <Descriptions>
            <Description>{value.type}</Description>
            <Description>{value.model}</Description>
            <Description>{value.id}</Description>
            <Description>{value.accessories[0]}</Description>
          </Descriptions>
        </DescriptWrapper>
      </div>
      <LearnMoreBtn />
    </>
  );
};
