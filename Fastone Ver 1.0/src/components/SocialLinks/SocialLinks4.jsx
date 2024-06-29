import { social3 } from "../../data/social3";

const SocialLinks4 = () => {
  return (
    <div className="socialLinks flex flex-col items-center gap-[5px] absolute left-7 bottom-28 md:bottom-9">
      {social3.map(
        (item, index) =>
          index < 4 && (
            <a
              className={item.socialClass}
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

export default SocialLinks4;
