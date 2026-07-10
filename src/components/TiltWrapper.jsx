import Tilt from "react-parallax-tilt";
import { useEffectsEnabled } from "../hooks/useEffectsEnabled";

export const TiltWrapper = ({ children, className = "", ...props }) => {
  const { enableTilt } = useEffectsEnabled();

  if (!enableTilt) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Tilt
      className={className}
      gyroscope={false}
      glareEnable={false}
      {...props}
    >
      {children}
    </Tilt>
  );
};
