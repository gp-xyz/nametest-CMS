

const Footer = (props) => {
  return (
    <footer>
      <div className={"footer-"+props.theme}>
        <p>Copyright &copy; {new Date().getFullYear()} Flashbulb. All rights reserved.</p>
        <ul>
          
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
        <p>vaya con dios</p>
      </div>
    </footer>
  );
};

export default Footer;
