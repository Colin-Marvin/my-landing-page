import BlogItem from "../BlogItem";
import PropTypes from "prop-types";

export default function BlogList({ blogPosts }) {
  if (!blogPosts && !blogPosts?.length) {
    return null;
  }

  // TODO: Styling
  return (
    <div className="d-flex w-100">
      {blogPosts.map((blog, index) => {
        return (
          <BlogItem
            key={index}
            index={index}
            blogPost={blog}
            setBlog={() => {}}
            imageOrientation={"top"}
          />
        );
      })}
    </div>
  );
}

BlogList.prototype = {
  blogPosts: PropTypes.array.isRequired,
};
