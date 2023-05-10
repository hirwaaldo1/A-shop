type Props = React.PropsWithChildren<{
  as: "div" | "section" | "aside";
}>;
import { Comme } from "next/font/google";

const inter = Comme({
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  preload: true,
  subsets: ["latin"],
});

const Wrapper = ({
  as: Component = "section",
  children,
}: Props): React.ReactElement => {
  return <Component className={inter.className}>{children}</Component>;
};

export default Wrapper;
