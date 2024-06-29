import { social } from "../../data/social";

const SocialLinks = () => {
  return (
    <div className="socialLinksWrap flex gap-6 items-center lg:pl-[6.25rem] md:pl-0 pl-0">
      <h5 className="text-white font-Poppins font-bold text-[0.984375rem] uppercase">
        Follow Me
      </h5>
      <div className="socialLinks flex items-center gap-[5px]">
        {social.map(
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
      {/* Social Links Wrap */}
    </div>
  );
};

export default SocialLinks;
