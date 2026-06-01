const GradientTop = () => {
  return (
    <div
      className="absolute top-0 right-0 w-full h-[70vh] -z-10 translate-y-[-60%] overflow-hidden pointer-events-none"
      style={{
        maskImage:
          "radial-gradient(ellipse at center, black 30%, transparent 70%)",
      }}
    >
      <div
        className="w-full h-full blur-[180px] opacity-90"
        style={{
          background: `
        radial-gradient(ellipse 70% 70% at 40% 60%, hsla(300, 80%, 85%, 1) 0%, transparent 60%),
        radial-gradient(ellipse 70% 70% at 70% 50%, hsla(230, 80%, 85%, 1) 0%, transparent 60%),
        radial-gradient(ellipse 50% 50% at 10% 80%, hsla(60, 80%, 90%, 1) 0%, transparent 60%)
      `,
        }}
      />
    </div>
  );
};

export default GradientTop;
