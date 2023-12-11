# PlantApp - React Native App
PlantApp is an advanced application that allows users to browse a list of plants and take photos of unknown plants, giving plant knowledge with the help of artificial intelligence.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: General Information
### Introduction

PlantApp is a mobile application that begins with an onboarding system, providing general information about its features. After the final onboarding page, it offers monthly and yearly subscription services. Users who choose not to subscribe are redirected to the main page to use the trial version.

### Main Features

Onboarding System: Guides users through the app's functionalities and subscription options.
Subscription Services: Offers monthly and yearly memberships with additional features.
Trial Version: Available for users who opt out of the subscription service.
Main Page Features

Product Search: Users can search for plants by name using data fetched from an API. The search results are listed below the search bar.
Getting Started Section: Displays information from the 'questions' service in a card layout.
Plant Library: Showcases a comprehensive list of all plants, designed responsively for optimal user experience.
Design and Responsiveness

The app is designed with a focus on user-friendly, responsive design, ensuring a seamless experience across different devices and screen sizes.

This documentation provides an overview of PlantApp's key features and functionalities, designed for an engaging and informative user experience.

## Foldering Structure
```
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── index.ts
│   │   ├── components
│   │   │   ├── auto-image
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── button
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   ├── button.presets.ts
│   │   │   │   ├── button.props.ts
│   │   │   ├── category-card
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   ├── category-card.presets.ts
│   │   │   │   ├── category-card.props.ts
│   │   │   ├── icon
│   │   │   │   ├── icon
│   │   │   │   │   ├── index.tsx
│   │   │   │   ├── icon.props.ts
│   │   │   │   ├── index.tsx
│   │   │   ├── started-card
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   ├── started-card.presets.ts
│   │   │   │   ├── started-card.props.ts
│   │   │   ├── text
│   │   │   │   ├── index.tsx
│   │   │   │   ├── text.props.ts
│   │   │   │   ├── text.presets.ts
│   │   │   ├── index.ts
│   │   ├── navigators
│   │   │   ├── app-stack.tsx
│   │   │   ├── bottom-tab.tsx
│   │   │   ├── diagnose-stack.tsx
│   │   │   ├── home-stack.tsx
│   │   │   ├── my-garden-stack.tsx
│   │   │   ├── onboarding-stack.tsx
│   │   │   ├── profile-stack.tsx
│   │   │   ├── scan-stack.tsx
│   │   ├── redux
│   │   │   ├── slices
│   │   │   │   ├── categories-slice.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── questions-slice.ts
│   │   │   ├── store.ts
│   │   ├── screens
│   │   │   ├── diagnose-screen
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── home-screen
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── my-garden-screen
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── onboarding-screen
│   │   │   │   ├── index.tsx
│   │   │   ├── onboarding-1
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── onboarding-2
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── onboarding-3
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── profile-screen
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── scan-screen
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── paywall-screen
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── test-screen
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   ├── index.ts
│   │   ├── utils
│   │   │   ├── index.ts
│   │   │   ├── colors.ts
│   │   │   ├── palette.ts
│   │   │   ├── sizing.ts
│   │   ├── App.tsx

 
