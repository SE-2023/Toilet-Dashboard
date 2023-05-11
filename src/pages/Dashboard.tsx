import ChartUser from "../components/ChartUser";
import SummaryStatus from "../components/SummaryStatus";
import TopReview from "../components/TopReview";

const Dashboard = () => {
  return (
    <div>
      <SummaryStatus />
      <div className="grid grid-cols-4">
        <ChartUser />
        <TopReview />
      </div>
    </div>
  );
};

export default Dashboard;
