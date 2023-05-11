import { FC } from "react";

interface IWidget {
  title: string;
  count: string | number;
  className?: string;
}

const WidgetSummary: FC<IWidget> = ({ title, count, className }) => {
  return (
    <div
      className={[
        className,
        "min-w-[300px] mr-3 mb-3 rounded shadow-gray inline-block p-7",
      ].join(" ")}
    >
      <div className="text-white text-lg">{title}</div>
      <div className="text-white font-extrabold text-3xl">{count}</div>
    </div>
  );
};

export default WidgetSummary;
