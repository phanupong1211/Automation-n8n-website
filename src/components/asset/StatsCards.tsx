import { IconContext } from "react-icons";

type Props = {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
};

const StatCard = ({ title, count, icon, color }: Props) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-center justify-between`}>
      <div>
        <h2 className="text-base font-medium text-slate-500">{title}</h2>
        <p className="text-3xl font-bold text-slate-900">{count}</p>
      </div>
      <IconContext.Provider value={{ color: color, size: "2em" }}>
        <div>{icon}</div>
      </IconContext.Provider>
    </div>
  );
};

export default StatCard;