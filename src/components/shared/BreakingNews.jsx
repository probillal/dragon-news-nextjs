import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      id: 1,

      content:
        "Artificial Intelligence has become one of the fastest-growing technologies in the world. Companies are investing billions in AI research to improve productivity, healthcare, education, and customer experiences.",
    },
    {
      id: 2,

      content:
        "The Bangladesh national cricket team delivered an exceptional performance to win the series. Fans celebrated across the country after the thrilling victory.",
    },
    {
      id: 3,

      content:
        "The Global Climate Summit concluded with countries committing to increased investments in renewable energy, sustainable infrastructure, and carbon reduction initiatives.",
    },
  ];
  return (
    <div className="bg-gray-100 py-2 px-4 flex items-center space-x-4 container mx-auto">
      <button className="btn bg-red-500 text-white">Latest News</button>
      <Marquee pauseOnHover={true}>
        {news.map((n) => {
          return (
            <p key={n.id} className="mx-4">
              {n.content}
            </p>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
