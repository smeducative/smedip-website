import { motion } from "framer-motion";

type Props = {
  title: string;
  center?: boolean;
  sub?: JSX.Element | string;
};

export default function Jumbotron({ title, sub, center }: Props) {
  return (
    <div className="bg-gradient-to-t from-primary to-green-700">
      <motion.div
        className="mx-auto pt-16 max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div
          className={`py-12 xl:py-20 px-5 xl:px-0 ${
            center ? "text-center" : "text-left"
          }`}
        >
          <h1 className="font-bold font-roboto text-lg text-slate-50 xl:text-3xl">
            {title}
          </h1>
          {sub}
        </div>
      </motion.div>
    </div>
  );
}
