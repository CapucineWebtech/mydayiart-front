import Icon from "./Icon";
import "../css/socialnetworksbtn.css";

const SocialNetworksBtns = ({ className }) => {
  const combinedClassName = `social-networks-btns ${className}`;
  return (
    <div className={combinedClassName}>
      <a href="https://www.instagram.com/mydayiart/" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="instagram" className="social-networks-icon" color="#fff" />
        </div>
      </a>
      <a href="https://www.facebook.com/share/ZoXq65EMLYLy6FQH/" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="facebook" className="social-networks-icon" color="#fff" />
        </div>
      </a>
      <a href="https://www.youtube.com/@MyDayIArt" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="youtube" className="social-networks-icon" color="#fff" />
        </div>
      </a>
      <a href="https://www.tiktok.com/@mydayiart" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="tiktok" className="social-networks-icon" color="#fff" />
        </div>
      </a>
      <a href="https://pin.it/JJII40FEI" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="pinterest" className="social-networks-icon" color="#fff" />
        </div>
      </a>
    </div>
  );
};

export default SocialNetworksBtns;