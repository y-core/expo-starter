import { create } from 'twrnc';

const tw = create(require('^/tailwind.config.js'));

export { tw };

// type CustomClassInput = StyleProp<ViewStyle>;

// const customTw = Object.create(tw);

// customTw.style = (...inputs: (ClassInput | CustomClassInput)[]): Style => {
//   return tw.style(...inputs);
// };

// export { customTw as tw };
