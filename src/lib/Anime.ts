export const topToBottonAnime = {
  initial: { opacity: 0, y: -75 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] },
  },
};

export const bottomToTopANime = {
  initial: { opacity: 0, y: 75 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] },
  },
};

export const scaleAnime = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] },
  },
};

export const leftToRightAnime = {
  initial: { opacity: 0, x: -25 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] },
  },
};

export const rightToLeftAnime = {
  initial: { opacity: 0, x: 25 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] },
  },
};

export const feadeInAnime = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] },
  },
};
