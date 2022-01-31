import '@/assets/styles/components/Login/Heading.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';

type Props = {
  text: string;
  isBackButtonShow?: boolean;
};

const Heading: React.FC<Props> = ({ text, isBackButtonShow = false }) => (
    <div className="login-signup-area-heading">
      {isBackButtonShow && (
        <button className="login-signup-area-heading__back-button" type="button">
          <img src={IconArrow} alt="back login page" />
        </button>
      )}
      <h3
        className={`login-signup-area-heading__text ${
          isBackButtonShow ? 'login-signup-area-heading__text--back-button-show' : ''
        }`}
      >
        {text}
      </h3>
    </div>
  );

export default Heading;
