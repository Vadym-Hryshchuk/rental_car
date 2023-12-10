import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { toggleAdvertFavorite } from '../../redux/favorites/favoritesSlice';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import { createAddress } from 'utils/createAddress';

export const ListItem = ({ value }) => {
  const dispatch = useDispatch();
  const favoriteAdvarts = useSelector(selectFavorites);
  const [isOpen, setIsOpen] = useState(false);

  const city = createAddress(value, 0);
  const country = createAddress(value, 1);
  const isActive = favoriteAdvarts.some(advert => advert.id === value.id);

  return (
    <>
      <ImageWrapper>
        <img src={value.img} alt={value.make} />
        <button onClick={() => dispatch(toggleAdvertFavorite(value))}>
          {isActive ? <Active /> : <Normal />}
        </button>
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
          <Description>{value.isFavorite}</Description>
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
        <ModalContent
          content={value}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </ModalAdverts>
    </>
  );
};
