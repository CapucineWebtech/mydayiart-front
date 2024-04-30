import Icon from "./Icon";

const SocialNetworksBtns = () => {
  return (
    <div className="social-networks-btns">
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="instagram" className="social-networks-icon" color="#fff" />
        </div>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="facebook" className="social-networks-icon" color="#fff" />
        </div>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="youtube" className="social-networks-icon" color="#fff" />
        </div>
      </a>
      <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="tiktok" className="social-networks-icon" color="#fff" />
        </div>
      </a>
      <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
        <div className="social-networks-icon-container">
          <Icon name="pinterest" className="social-networks-icon" color="#fff" />
        </div>
      </a>
    </div>
  );
};

export default SocialNetworksBtns;