const FeedbackCard = ({ feedbackItem }) => {
  // console.log(feedbackItem);
  return (
    <div>
      <div className="card h-52 bg-secondary text-secondary-content ">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{feedbackItem?.name}</h2>
            <img
              src={feedbackItem?.userImg}
              className="w-12 h-12 rounded-full"
            />
          </div>
          <p>{feedbackItem?.review}</p>
          <div className="card-actions justify-between">
            <p className="text-black text-sm">
              {new Date().toLocaleDateString()}
            </p>
            <div className="rating">
              <div className="mask mask-star" aria-label="1 star"></div>
              <div className="mask mask-star" aria-label="2 star"></div>
              <div
                className="mask mask-star"
                aria-label="3 star"
                aria-current="true"
              ></div>
              <div className="mask mask-star" aria-label="4 star"></div>
              <div className="mask mask-star" aria-label="5 star"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
