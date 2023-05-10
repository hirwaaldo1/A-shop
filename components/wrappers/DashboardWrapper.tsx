type Props = React.PropsWithChildren<{
  as: "div" | "section" | "aside";
}>;
const Wrapper = ({
  as: Component = "section",
  children,
}: Props): React.ReactElement => {
  return <Component>{children}</Component>;
};

export default Wrapper;
