# Setup NativeWind with Expo Router

Follow these steps to set up a new Expo project with NativeWind for styling:

## Step 1: Create a New Expo App
```bash
npx create-expo-app ./
```

## Step 2: Install Required Dependencies
```bash
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```

## Step 3: Initialize Tailwind CSS
```bash
npx tailwind init
```

## Step 4: Configure `tailwind.config.js`
Update the `tailwind.config.js` file with the following content:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Step 5: Create `babel.config.js`
Create a `babel.config.js` file in the project root and paste the following content:
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

## Step 6: Customize `metro.config.js`
Run the following command to customize Metro bundler:
```bash
npx expo customize metro.config.js
```
Then, update `metro.config.js` with the following content:
```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

## Step 7: Create `global.css`
Create a `global.css` file in the project root and add the following content:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the `global.css` file in your `_layout.tsx` file:
```javascript
import "../global.css";
```

## Resources
- [NativeWind Documentation](https://www.nativewind.dev/getting-started/expo-router)
- [Expo Documentation](https://docs.expo.dev)
