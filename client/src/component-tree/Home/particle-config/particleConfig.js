export const setUpConfig = (color) => {
  return {
    particles: {
      number: {
        value: 100,
        density: {
          enable: false,
        },
      },
      color: {
        value: color,
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#0003333000",
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
    interactivity: {
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0,
        },
      },
    },
  };
};
export default setUpConfig;
