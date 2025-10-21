const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 bottom-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0 fs-6">
              © {new Date().getFullYear()} Library Management System. All rights reserved.
            </p>
          </div>
          
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 fs-6">
              Built with ❤️ for better library management
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;