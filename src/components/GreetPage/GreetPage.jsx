import { Appeal, Img, TitleGreet } from "./GreetPage.styled";

export const GreetPage = () => {
  return (
    <>
      <TitleGreet>Live your life by a compass, not a clock</TitleGreet>

      <Img
        src="https://i.ibb.co/Msrz2FP/osh-1-o8oi54r4zby8pl4xinvl95pwtxkrcovexljd6p9saw-fotor-20231209125453.jpg"
        alt="car"
      />
      <Appeal to="/catalog">
        Click here to choose the car on which you will start your journey!
      </Appeal>
    </>
  );
};
