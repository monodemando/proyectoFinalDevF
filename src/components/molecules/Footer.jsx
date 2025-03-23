const Footer = (props) => {
    const {divID} = props
    return (
      <footer id={divID}>
        <div className="footer-content">
          <p><strong>Developer:</strong> Yair Shats</p>
          <p><strong>Email:</strong> <a href="mailto:yair.shats@gmail.com">yair.shats@gmail.com</a></p>
          <p><strong>Teléfono:</strong> <a href="tel:+56940514730">+56 9 4051 4730</a></p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  