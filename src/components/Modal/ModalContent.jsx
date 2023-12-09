import { createAddress } from 'utils/createAddress';
import {
  DescriptWrapper,
  Description,
  Descriptions,
  Details,
  Make,
  ModalContentStyled,
  Title,
} from './ModalContent.styled';

export const ModalContent = ({ content }) => {
  const city = createAddress(content, 0);
  const country = createAddress(content, 1);

  return (
    <ModalContentStyled>
      <img src={content.img} alt={content.make} />

      <Title>
        {content.make} <Make>{content.model}</Make>, {content.year}
      </Title>
      <DescriptWrapper>
        <Description>{city}</Description>
        <Description>{country}</Description>
        <Description>Id: {content.id}</Description>
        <Description>Year: {content.year}</Description>
        <Description>Type: {content.type}</Description>
        <Descriptions>
          <Description>Fuel Consumption: {content.fuelConsumption}</Description>
          <Description>Engine Size: {content.engineSize}</Description>
        </Descriptions>
      </DescriptWrapper>
      <Details>{content.description}</Details>
      <p>Accessories and functionalities:</p>

      {/* <LearnMoreBtn
        onClick={() => {
          setIsOpen(true);
        }}
      />  */}
    </ModalContentStyled>
  );
};
