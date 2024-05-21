const EventBar = () => {
  // TODO: Add interactivity
  return (
    <div className="eventbar-container">
      {/* Logo and menu button */}
      <div className="eventbar-logo-menu">
        <button type="button" className="focus:outline-none" aria-label="Menu">
          <img src="images/menu.svg" alt="Open menu" width="24" height="24" />
        </button>
        <img
          src="images/logo.svg"
          alt="Company logo"
          width="100"
          height="100"
        />
      </div>

      {/* Event bar links */}
      <div className="eventbar-links">
        {/* Offers Navigation */}
        <div className="eventbar-offers-nav">
          <button type="button" aria-label="Previous offer">
            <img
              className="eventbar-nav-button"
              src="images/left-arrow.svg"
              alt="Previous offer"
              width="16"
              height="16"
            />
          </button>
          <span className="eventbar-nav-link">
            Valentine's Day Offers! Buy Two Get One Free{" "}
            <a href="#" className="font-bold underline mx-1">
              Shop Now
            </a>
          </span>
          <button type="button" aria-label="Next offer">
            <img
              className="eventbar-nav-button w-3"
              src="images/right-arrow.svg"
              alt="Next offer"
              width="12"
              height="16"
            />
          </button>
        </div>

        {/* Contacts */}
        <div className="eventbar-contacts">
          <ContactLink
            href="#"
            imgSrc="images/phone.svg"
            imgAlt="phone"
            text="Contact Us"
          />
          <ContactLink
            href="#"
            imgSrc="images/shop-cart.svg"
            imgAlt="shop cart"
            text="Track Order"
          />
          <ContactLink
            href="#"
            imgSrc="images/pointer.svg"
            imgAlt="pointer"
            text="Find A Store"
          />
        </div>
      </div>
    </div>
  );
};

type ContactLinkProps = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  text: string;
};

const ContactLink = ({ href, imgSrc, imgAlt, text }: ContactLinkProps) => (
  <a href={href} className="eventbar-contact-link">
    <img className="my-1" src={imgSrc} alt={imgAlt} width="16" height="16" />
    <span>{text}</span>
  </a>
);

export default EventBar;
