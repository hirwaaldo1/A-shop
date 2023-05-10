type Props = React.PropsWithChildren<{
  as: "div" | "section" | "aside";
}>;
const Container = ({
  as: Component = "section",
  children,
}: Props): React.ReactElement => {
  return (
    <Component className="mx-8 md:mx-auto max-w-7xl">{children}</Component>
  );
};

export default Container;
