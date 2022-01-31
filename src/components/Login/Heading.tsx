import '@/assets/styles/components/Login/Heading.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';

type Props = {
  text: string;
};

const Heading: React.FC<Props> = (props) => {
  const { text } = props;

  return (
    <div className="login-signup-area-heading">
      <button className="login-signup-area-heading__back-button" type="button">
        <img src={IconArrow} alt="back login page" />
      </button>
      <h3 className="login-signup-area-heading__text">{text}</h3>
    </div>
  );
};

export default Heading;
