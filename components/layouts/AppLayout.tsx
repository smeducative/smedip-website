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
      className={`${bright ? "bg-slate-50 dark:bg-slate-900" : "bg-slate-200 dark:bg-slate-950"} ${
        white && "bg-white dark:bg-slate-900"
      } min-h-screen`}
    >
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}
