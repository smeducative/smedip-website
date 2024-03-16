import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";

type Props = {
  bright?: boolean;
  white?: boolean;
  children?: React.ReactNode;
};

export default function AppLayout({ children, bright, white }: Props) {
  return (
    <div
      className={`${bright ? "bg-slate-50" : "bg-slate-200"} ${
        white && "bg-white"
      } min-h-screen`}
    >
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}
