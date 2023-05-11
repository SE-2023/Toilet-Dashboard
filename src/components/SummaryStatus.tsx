import { useEffect, useState } from "react";
import WidgetSummary from "./WidgetSummary";
import axios from "axios";

const SummaryStatus = () => {
  const [user, setUser] = useState();
  const [toilet, setToilet] = useState();
  const [comment, setComment] = useState();
  useEffect(() => {
    const getSummary = async () => {
      const { data }: any = await axios.get("/dashboard/summary");

      console.log(data);

      setUser(data.user);
      setToilet(data.toilet);
      setComment(data.comment);
    };

    getSummary();
  }, []);

  return (
    <div>
      <WidgetSummary
        title="ผู้ใช้งานทั้งหมด (คน)"
        count={user ? String(user) : "-"}
        className="bg-red-500"
      />
      <WidgetSummary
        title="ห้องน้ำทั้งหมด (แห่ง)"
        count={toilet ? String(toilet) : "-"}
        className="bg-green-500"
      />
      <WidgetSummary
        title="รีวิวจากผู้ใช้งาน (รายการ)"
        count={comment ? String(comment) : "-"}
        className="bg-yellow-500"
      />
      {/* <WidgetSummary
        title="ผู้ใช้งานทั้งหมด"
        count={500}
        className="bg-pink-500"
      /> */}
    </div>
  );
};

export default SummaryStatus;
