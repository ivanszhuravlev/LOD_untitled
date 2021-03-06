export const Screens = {
  Home: "Главная",
  Idea: "idea",
  CreateIdea: "СоздатьИдею",
  Leaderboard: "Лидеры",
  User: "Профиль",
};

export const Refs = {
  [Screens.Idea]: `${Screens.Idea}/:id`,
};

const getLinkingConfig = (screens, refs) => {
  return Object.keys(screens).reduce(
    (config, screen) => ({
      ...config,
      [screens[screen]]: {
        path: refs[screens[screen]] || screens[screen],
        parse: {
          id: (id) => `${id}`,
        },
      },
    }),
    {}
  );
};

export const linking = {
  prefixes: ["http://untitled.com", "untitled://"],
  config: getLinkingConfig(Screens, Refs),
};

export const getLink = (route, params) => {
  const paramsList = Object.values(params).reduce(
    (list, param) => `${list}/${param}`,
    ""
  );

  return `/${route}${paramsList}`;
};
