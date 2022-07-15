import '@/assets/styles/components/Common/GoneButton.scss';

type Props = {
  isGone: boolean;
};

const GoneButton: React.FC<Props> = ({ isGone }) => {
  const handleToggleGoneFlag = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <button className={`gone-button${isGone ? ' gone-button--gone' : ''}`} type="button" onClick={handleToggleGoneFlag}>
      行った！
    </button>
  );
};

export default GoneButton;
