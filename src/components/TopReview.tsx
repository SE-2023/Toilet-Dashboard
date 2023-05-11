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

      console.log("top review", data);

      setData(data);
    };

    getData();
  }, []);

  return (
    <div className="mt-2 w-100">
      <div className="text-xl font-bold">รีวิวจากผู้ใช้งานล่าสุด</div>
      <div className="py-2">
        {data.map((item: any, index: number) => {
          return <Item key={index} {...item} no={index} />;
        })}
      </div>
    </div>
  );
};

const Item = (item: any) => {
  return (
    <div className="flex border-[1px] border-slate-300 rounded-lg p-4 my-3">
      {/* <div className="pr-4">{item.no + 1}.</div> */}
      <div>
        <Rate rate={item.rate} />
        <div>{item.comment}</div>
      </div>
    </div>
  );
};

const Rate = (props: any) => {
  return (
    <div>
      <div className="flex">
        {Array.from({ length: props.rate }).map((_, index) => {
          return <AiTwotoneStar key={index} color="#FFC000" size={20} />;
        })}
      </div>
    </div>
  );
};

export default TopReview;
