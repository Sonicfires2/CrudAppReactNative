/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Button } from "react-native";

const tintColorLight = 'orange';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: 'black',
    background: '#fff',
    headerBackground: 'rgb(242,242,242)',
    tint: tintColorLight,
    icon: 'black',
    tabIconDefault: '#c68e17',
    tabIconSelected: tintColorLight,
    button:'royalblue'
  },
  dark: {
    text: 'white',
    background: 'black',
    headerBackground: 'rgb(2,2,2)',
    tint: tintColorDark,
    icon: 'red',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    button:'royalblue',
  },
};
