import '@/assets/styles/components/Login/Heading.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';
import getHeadingText from './getHeadingText';

const Heading: React.FC = () => {
  const headingText = getHeadingText();
  const isBackButtonShow = !!window.location.search;

  return (
    <div className="login-signup-area-heading">
      {isBackButtonShow && (
        <button className="login-signup-area-heading__back-button" type="button" onClick={() => window.history.back()}>
          <img src={IconArrow} alt="back login page" />
        </button>
      )}
      <h3
        className={`login-signup-area-heading__text ${
          isBackButtonShow ? 'login-signup-area-heading__text--back-button-show' : ''
        }`}
      >
        {headingText}
      </h3>
    </div>
  );
};

export default Heading;
