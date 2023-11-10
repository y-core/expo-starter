// https://developer.apple.com/fonts/
const Fonts = {
  SansLight: require('^/assets/fonts/sf-pro-text-light.ttf'),
  SansRegular: require('^/assets/fonts/sf-pro-text-regular.ttf'),
  SansMedium: require('^/assets/fonts/sf-pro-text-medium.ttf'),
  SansBold: require('^/assets/fonts/sf-pro-text-semibold.ttf'),
  SansHeavy: require('^/assets/fonts/sf-pro-text-heavy.ttf'),
};

export type FontFamily = keyof typeof Fonts;

export default Fonts;
