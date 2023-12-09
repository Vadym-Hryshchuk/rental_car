import { createAddress } from 'utils/createAddress';
import {
  Comfort,
  Condition,
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
      <Condition>
        Minimum age :{' '}
        <Value>{parseInt(content.rentalConditions.match(/\d+/))}</Value>
      </Condition>
      <Condition>Valid driver’s license</Condition>
      <Condition>Security deposite required</Condition>
      <Condition>
        Mileage: <Value>{content.mileage}</Value>
      </Condition>
      <Condition>
        Price: <Value>{content.rentalPrice}</Value>
      </Condition>
      {/* <LearnMoreBtn
        onClick={() => {
          setIsOpen(true);
        }}
      />  */}
    </ModalContentStyled>
  );
};
