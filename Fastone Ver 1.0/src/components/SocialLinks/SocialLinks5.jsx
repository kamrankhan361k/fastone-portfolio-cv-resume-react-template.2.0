import { social3 } from "../../data/social3";

const SocialLinks5 = () => {
  return (
    <div className="socialLinks flex flex-col items-center gap-[5px] absolute right-[3.75rem] bottom-[2.8125rem]">
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

export default SocialLinks5;
