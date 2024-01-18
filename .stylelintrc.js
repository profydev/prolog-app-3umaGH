module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],

  rules: {
    // allow CamelCase for class names
    "selector-class-pattern":
      "^([a-z][a-zA-Z]*)(-[a-z][a-zA-Z]*)*$|^([a-z][a-zA-Z]*)+$",
    // allow CSS modules "composes" proptery
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["export"],
      },
    ],
    "property-no-unknown": [
      true,
      {
        // allow CSS modules "composes" proptery, as well as :export and desktop for breakpoints.
        ignoreProperties: ["desktop", "composes"],
        ignoreSelectors: [":export"],

        // CSS Modules composition
        // https://github.com/css-modules/css-modules#composition
      },
    ],
  },
};
