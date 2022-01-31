import '@/assets/styles/components/Login/Heading.scss';

type Props = {
  text: string;
};

const Heading: React.FC<Props> = (props) => {
  const { text } = props;

  return <h3 className="login-signup-area__heading">{text}</h3>;
};

export default Heading;
