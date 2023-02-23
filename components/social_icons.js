const SocialIcon = (props) => {
  return (
    props.url && (
      <img
        src={props.icon}
        alt="social media icon"
        className={`w-6 invert cursor-pointer ${props.className}`}
        onClick={() => window.open(props.url, "_blank")}
      />
    )
  );
};

export default SocialIcon;
