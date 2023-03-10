const sizes = {
  desktop: "1440px",
  laptop: "1280px",
  tablet: "1024px",
  mobile: "768px",
  phone: "480px",
  height: "600px",
};

const media = {
  desktop: `screen and (max-width: ${sizes.desktop})`,
  laptop: `screen and (max-width: ${sizes.laptop})`,
  tablet: `screen and (max-width: ${sizes.tablet})`,
  mobile: `screen and (max-width: ${sizes.mobile})`,
  phone: `screen and (max-width: ${sizes.phone})`,
  height: `screen and (max-height: ${sizes.height})`,
};

export { sizes, media };
