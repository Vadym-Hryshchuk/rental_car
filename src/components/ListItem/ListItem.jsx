import { Descriptions, ImageWrapper } from "./ListItem.styled";

export const ListItem = ({ value }) => {
  return (
    <>
      <ImageWrapper>"IMAGES"</ImageWrapper>
      <div>
        <p>
          <span>{`${value.make} ${value.model}, ${value.year}`}</span>

          <span>{value.rentalPrice}</span>
        </p>
        <div>
          <Descriptions>
            {value.address.split(",").slice(1, 2).join("").trim()}
          </Descriptions>
          <Descriptions>
            {value.address.split(",").slice(2).join("").trim()}
          </Descriptions>
          <Descriptions>{value.rentalCompany}</Descriptions>
          <p>
            <Descriptions>{value.type}</Descriptions>
            <Descriptions>{value.model}</Descriptions>
            <Descriptions>{value.id}</Descriptions>
            <Descriptions>{value.accessories[0]}</Descriptions>
          </p>
        </div>
      </div>
    </>
  );
};
