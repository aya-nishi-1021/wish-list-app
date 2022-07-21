import '@/assets/styles/components/Common/GoneButton.scss';
import { updateIsGone } from '@/firebase';

type Props = {
  isGone: boolean;
  placeId: string | undefined;
};

const GoneButton: React.FC<Props> = ({ isGone, placeId }) => {
  const handleToggleGoneFlag = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    await updateIsGone(!isGone, placeId);
  };

  return (
    <button className={`gone-button${isGone ? ' gone-button--gone' : ''}`} type="button" onClick={handleToggleGoneFlag}>
      行った！
    </button>
  );
};

export default GoneButton;
