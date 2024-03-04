const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // flowbite plugin
    require('flowbite/plugin'),
    // `icon-`
    addDynamicIconSelectors(),
	// `icon-hover-`
    addDynamicIconSelectors({
      prefix: "icon-hover",
      overrideOnly: true,
    }),
  ],
}

