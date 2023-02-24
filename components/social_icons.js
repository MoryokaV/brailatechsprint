import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = (props) => {
  return (
    props.url && (
      <FontAwesomeIcon
        icon={props.icon}
        alt="social media icon"
        className={`w-6 cursor-pointer ${props.className}`}
        onClick={() => window.open(props.url, "_blank")}
      />
    )
  );
};

export default SocialIcon;
