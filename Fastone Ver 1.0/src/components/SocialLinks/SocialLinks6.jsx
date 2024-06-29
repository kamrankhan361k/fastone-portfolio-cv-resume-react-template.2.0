import { social4 } from "../../data/social4";

const SocialLinks6 = () => {
  return (
    <div className="socialLinks flex flex-col items-center justify-center gap-5">
      {social4.map(
        (item, index) =>
          index < 3 && (
            <a
              className="inline-block"
              href={item.socialLink}
              title={item.socialTitle}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {item.socialIcon}
            </a>
          )
      )}
      {/* Social Links */}
    </div>
  );
};

export default SocialLinks6;
