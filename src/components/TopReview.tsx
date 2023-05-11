import axios from "axios";
import { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";

const TopReview = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get("/dashboard/top-review");

      console.log(data);

      setData(data);
    };

    getData();
  }, []);

  return (
    <div className="mt-5 w-100 p-5">
      <div className="text-xl font-bold">รีวิวจากผู้ใช้งานล่าสุด</div>
      <div className="py-2">
        {data.map((item: any, index: number) => {
          return <Item key={index} {...item} no={index} />;
        })}
      </div>
    </div>
  );
};

const Rate = (props: any) => {
  return (
    <div>
      {Array(props.count).map(() => {
        return <AiTwotoneStar />;
      })}
    </div>
  );
};

const Item = (item: any) => {
  return (
    <div className="flex border-[1px] border-slate-300 rounded p-4 my-3">
      <div className="pr-4">{item.no + 1}.</div>
      <div>{item.comment}</div>
      <div>
        <Rate count={item.rate} />
      </div>
    </div>
  );
};

export default TopReview;
