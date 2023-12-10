import { createAddress } from 'utils/createAddress';
import {
  CloseBtn,
  Comfort,
  Condition,
  Conditions,
  DescriptWrapper,
  Description,
  Descriptions,
  Details,
  Make,
  ModalContentStyled,
  Rental,
  Title,
  Value,
} from './ModalContent.styled';
import { RentalCarBtn } from 'components/button/RentalCarBtn/RentalCarBtn';
import { ReactComponent as Close } from 'icons/x.svg';

export const ModalContent = ({ content, onClose }) => {
  const city = createAddress(content, 0);
  const country = createAddress(content, 1);

  return (
    <ModalContentStyled>
      <img src={content.img} alt={content.make} />
      <CloseBtn type="button" onClick={onClose}>
        <Close />
      </CloseBtn>

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
      <Comfort>Accessories and functionalities:</Comfort>
      <Descriptions>
        {content.accessories.map(text => (
          <Description key={text}>{text}</Description>
        ))}
      </Descriptions>
      <Descriptions>
        {content.functionalities.map(text => (
          <Description key={text}>{text}</Description>
        ))}
      </Descriptions>
      <Rental>Rental Conditions:</Rental>
      <Conditions>
        {content.rentalConditions.split('\n').map(text => (
          <Condition key={text}>{text}</Condition>
        ))}

        <Condition>
          Mileage: <Value>{content.mileage}</Value>
        </Condition>
        <Condition>
          Price: <Value>{content.rentalPrice}</Value>
        </Condition>
      </Conditions>
      <RentalCarBtn />
    </ModalContentStyled>
  );
};
