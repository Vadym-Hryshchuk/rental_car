import { useState } from 'react'; // Це тимчасово, потрібно видалити
import { LearnMoreBtn } from '../button/LearnMoreBtn/LearnMoreBtn';
import {
  DescriptWrapper,
  Description,
  Descriptions,
  ImageWrapper,
  Make,
  Title,
} from './ListItem.styled';
import { ReactComponent as Active } from '../../icons/active.svg';
import { ReactComponent as Normal } from '../../icons/normal.svg';
import { ModalAdverts } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent';
import { createAddress } from 'utils/createAddress';

export const ListItem = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const test = e => {
    setIsActive(isActive => !isActive);
  };
  const city = createAddress(value, 0);
  const country = createAddress(value, 1);
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
      <LearnMoreBtn
        onClick={() => {
          setIsOpen(true);
        }}
      />

      <ModalAdverts
        onOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <ModalContent content={value} />
      </ModalAdverts>
    </>
  );
};
