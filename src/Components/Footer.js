import React from "react";

const Footer = (props) => {
  const renderNetworks = () => {
    return props.data?.social.map((network) => {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  };

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{renderNetworks()}</ul>

          <ul>
            <li>Designed by Mohit</li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
