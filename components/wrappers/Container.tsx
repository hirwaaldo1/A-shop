type Props = React.PropsWithChildren<{
  as: "div" | "section" | "aside";
}>;
const Container = ({
  as: Component = "section",
  children,
}: Props): React.ReactElement => {
  return <Component className="max-w-7xl mx-auto">{children}</Component>;
};

export default Container;
