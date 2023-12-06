## Overview

This is a starter template for building mobile applications using Expo and React Native. This template is designed to help you kickstart your mobile app development by providing a solid foundation, project structure, and some commonly used features.

## TODO
- Implement https://www.loglib.io/
- Server backend:
    - Client -> (Hono) <-> (Drizzle) <-> (D1)

## Awesome

### Videos

- https://www.youtube.com/watch?v=jJl-DZ3d8k8 - using expo-router for lists
- https://www.youtube.com/watch?v=FXnnCrfiNGM - food-clone

### Awesome list

- Awesome list: https://reactnative.directory/?expo=true&ios=true&android=true&isMaintained=true&hasTypes=true&offset=300
- Boilerplate: https://github.com/Vivify-Ideas/expo-boilerplate

### Useful components

- Asset: https://docs.expo.dev/versions/latest/sdk/asset/
- Bottom bar: https://github.com/hoaphantn7604/react-native-curved-bottom-bar
- Forms: https://github.com/klazbaba/react-native-form-component
- FontAwesome: https://fontawesome.com/docs/web/use-with/react-native
- List: https://shopify.github.io/flash-list/
- Testing: https://github.com/expo/expo/tree/sdk-49/packages/jest-expo
- Toast: https://github.com/calintamas/react-native-toast-message

### Features to copy from

- Resizable typography: https://github.com/hectahertz/react-native-typography

# Expo Router template

based on the template at https://github.com/edrinekamya/expo-router-redux-template/

# Flow
- Home
    - Search for event
    - Featured: List of upcoming featured ENTRIES by proximity (Auction ??)
    - Popular: Most Favorited ENTRIES by other participants by proximity of previously entered races
    - Recommended: List of upcoming ENTRIES in the same proximity of previously entered races
- Favorites
    - Favorites: List of ENTRIES flagged as Favorites (Free entry competition of favorites??)
    - Bucket list: ENTRIES (won't affect recomendations)
    - Followed: Public ENTRIES of athletes you follow (social media ??)
- Enter
    - Choose favorite / Select next available of previously entered / Search for Entry
    - Capture entry details / take payment
- Entries
    - List of ENTRIES upcomming and past
    - Entry updates / number / directions / results etc.
    - Share entry with friends
- Settings
    - Profile
    - Payment ??
    - Linked Accounts / Friends / Company team
    - Follow (Public Profiles)
    - Dark Mode
    - Logout
