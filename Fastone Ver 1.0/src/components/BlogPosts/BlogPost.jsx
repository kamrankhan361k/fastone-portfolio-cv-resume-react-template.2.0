import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import PatternImg from "../../assets/images/patternImg3.jpg";
import { posts } from "../../data/posts";
import { SectionTitle } from "../SectionTitles";

const BlogPost = (props) => {
  return (
    <section className="postsWrap py-[5rem] sm:py-[6rem] md:py-[7.5rem] relative w-full">
      <div
        className="fixedBg bg-left-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${PatternImg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitle
          title="Featured"
          titleInner="Posts"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitle>
        <div className="postsList grid gap-[1.875rem] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 relative w-full">
          {posts.map(
            (item, index) =>
              index < 3 && (
                <div className="postBox group relative w-full" key={index}>
                  <div className="postImg overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] w-full">
                    <Link to={`/blog/${item.id}`} title={item.postTitle}>
                      <img
                        className="w-full group-hover:scale-105"
                        src={item.postImg}
                        alt={item.postTitle}
                      ></img>
                    </Link>
                  </div>
                  <div className="postInfo relative z-[1] px-5 sm:px-8 md:px-10 py-5 sm:py-7 md:py-8 mt-[-4.6875rem] inset-x-[10px] max-w-[calc(100%-1.25rem)]">
                    <div
                      className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                      style={{ backgroundImage: `url(${PatternImg2})` }}
                    ></div>
                    <span className="flex items-center text-accent gap-[10px] text-[.9375rem] font-NunitoSans font-semibold">
                      <FaCalendarAlt></FaCalendarAlt>{" "}
                      <Link className="hover:text-accent2" to={item.postDateLink} title={item.postDate}>
                        {item.postDate}
                      </Link>
                    </span>
                    <h3 className="text-accent2 text-[1.25rem] font-Poppins font-semibold mt-2">
                      <Link className="hover:text-accent" to={`/blog/${item.id}`} title={item.postTitle}>
                        {item.postTitle}
                      </Link>
                    </h3>
                    <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-5 mb-4"></i>
                    <span className="flex items-center text-accent gap-1 text-[1rem] font-NunitoSans font-bold">
                      By
                      <Link className="hover:text-accent2" to={item.postAuthorLink} title={item.postAuthor}>
                        {item.postAuthor}
                      </Link>
                    </span>
                  </div>
                  {/* Post Box */}
                </div>
              )
          )}
          {/* Posts List */}
        </div>
        <div className="viewAll text-center w-full mt-[3.125rem] md:mt-[4.0625rem]">
          <p className="text-desc2 font-NunitoSans text-[1rem] md:text-[1.125rem]">
            Want to see my professional work.{" "}
            <Link
              className="text-accent font-Poppins font-medium hover:text-accent2 underline underline-offset-8"
              to="/"
              title="Click here to View More"
            >
              Click here to View More
            </Link>
          </p>
          {/* View All */}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
