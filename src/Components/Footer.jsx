const Footer = (props) => {

  return (
    <footer className="mt-auto">
      <div className="bg-skin-menu text-skin-base py-6 flex flex-col items-center justify-center">
        <p className="mb-4 text-skin-base">&copy; {new Date().getFullYear()} Flashbulb. All rights reserved.</p>
        <ul className="flex items-center justify-center space-x-6 mb-4">
          <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
          <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
        </ul>
        <p className="text-gray-400">vaya con dios</p>
      </div>
    </footer>
  );
};

export default Footer;
