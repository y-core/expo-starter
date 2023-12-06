// https://tailwindcss.com/docs/customizing-colors
// https://find-nearest-tailwind-colour.netlify.app
// https://www.color-hex.com/color

// export type TColor = typeof themeColors.light;
// export type TTheme = keyof typeof themeColors;

const commonColors = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  warning: 'bg-amber-500',
  transparent: 'transparent',
};

const lightColors = {
  background: 'bg-slate-200',
  button: 'bg-slate-500',
  buttonText: 'text-gray-300',
  error: 'bg-red-700',
  icon: 'text-gray-700',
  input: 'bg-slate-300',
  inputSelected: 'text-cyan-300',
  inputText: 'text-gray-800',
  itemDefault: 'text-slate-400',
  itemDisabled: 'text-gray-300',
  itemSelected: 'text-cyan-600',
  linkText: 'text-slate-400',
  placeholderText: 'text-gray-400',
  row: 'bg-slate-300',
  success: 'bg-green-700',
  text: 'text-gray-800',
};

const darkColors = {
  background: 'bg-slate-900',
  button: 'bg-slate-400',
  buttonText: 'text-gray-800',
  error: 'bg-red-600',
  icon: 'text-gray-400',
  input: 'bg-slate-800',
  inputSelected: 'text-cyan-700',
  inputText: 'text-gray-300',
  itemDefault: 'text-slate-600',
  itemDisabled: 'text-gray-300',
  itemSelected: 'text-cyan-500',
  linkText: 'text-slate-500',
  placeholderText: 'text-gray-500',
  row: 'bg-slate-300',
  success: 'bg-green-600',
  text: 'text-gray-300',
};

export const themeColors = {
  light: { ...lightColors, ...commonColors },
  dark: { ...darkColors, ...commonColors },
};
