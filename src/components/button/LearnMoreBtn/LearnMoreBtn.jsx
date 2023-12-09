import { Button } from './LearnMoreBtn.styled';

export const LearnMoreBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Learn more
    </Button>
  );
};
