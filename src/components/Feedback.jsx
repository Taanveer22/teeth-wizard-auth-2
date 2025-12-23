import FeedbackCard from "./FeedbackCard";

const Feedback = ({ data2 }) => {
  // console.log(data2);
  return (
    <div>
      <h1 className="text-2xl font-medium text-center mb-4">Feedback</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data2.map((feedbackItem) => (
          <FeedbackCard
            key={feedbackItem.reviewId}
            feedbackItem={feedbackItem}
          ></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
