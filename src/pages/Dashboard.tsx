import ChartUser from "../components/ChartUser";
import SummaryStatus from "../components/SummaryStatus";
import TopReview from "../components/TopReview";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <SummaryStatus />
        <ChartUser />
      </div>
      <div>
        <TopReview />
      </div>
    </div>
  );
};

export default Dashboard;
