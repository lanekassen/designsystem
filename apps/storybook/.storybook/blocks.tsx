export const Wide = ({ style, ...rest }: React.ComponentPropsWithoutRef<"div">) => {
	const css = { ...style, margin: "3rem calc(50% - min(900px, 50vw) + 4em)" };
	return <div style={css} {...rest} />;
};
