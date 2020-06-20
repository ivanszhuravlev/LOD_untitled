export const Screens = {
  Home: "home",
  Dashboard: "dashboard",
  Idea: "idea",
};

export const Refs = {
  [Screens.Idea]: `${Screens.Idea}/:id`,
};

const getLinkingConfig = (screens, refs) => {
  return Object.keys(screens).reduce(
    (config, screen) => ({
      ...config,
      [screen]: refs[screen] || screens[screen],
    }),
    {}
  );
};

export const linking = {
  prefixes: ["https://untitled.com", "untitled://"],
  config: getLinkingConfig(Screens, Refs),
};

export const getLink = (route, params) => {
  const paramsList = Object.values(params).reduce(
    (list, param) => `${list}/${param}`,
    ""
  );

  return `${route}/${paramsList}`;
};
