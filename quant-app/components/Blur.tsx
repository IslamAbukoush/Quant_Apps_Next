
type BlurProps = {
  color: 'blue' | 'purple' | string;
  height: string;
  width: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  filter: string;
  sx?: {
    opacity?: {
      xs?: number;
      sm?: number;
      md?: number;
    };
    visibility?: {
      xs?: string;
      sm?: string;
      md?: string;
    };
  };
};


const Blur = ({ color, height, width, top, bottom, left, right, filter, sx } : BlurProps ) => {
  const getColor = () => {
    switch (color) {
      case "purple":
        return "radial-gradient(circle, rgba(156, 8, 255, 0.8156512605042017) -10%, rgba(156, 8, 255, 0) 70%)";
      case "blue":
        return "radial-gradient(circle, rgba(30, 80, 255, 0.7904411764705882) -30%, rgba(30, 80, 255, 0) 70%)";

      default:
        return color;
    }
  };

  return (
    <span
      style={{
        position: "absolute",
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        opacity: "0.5",
        width: width,
        height: height,
        background: getColor(),
        zIndex: -10,
        filter: filter,
        WebkitFilter: filter,
      }}
    />
  );
};

export default Blur;