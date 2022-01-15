import ImageCard from "./ImageCard";

const Images = ({ posts }) => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 gap-4 xl:grid-cols-4">
      {posts &&
        posts.map((post, index) => (
          <ImageCard
            key={index}
            title={post.title}
            description={post.explanation}
            date={post.date}
            src={post.url}
          />
        ))}
    </div>
  );
};

export default Images;
