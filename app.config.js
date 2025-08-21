export default {
  expo: {
    name: "FlowDo",
    slug: "FlowDo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/logo.png",
      resizeMode: "contain",
      backgroundColor: "#f6f8fa",
      dark: {
        image: "./assets/logo.png",
        backgroundColor: "#222",
      },
    },

    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.flowdo.app",
      infoPlist: {
        CFBundleIdentifier: "com.flowdo.app",
        CFBundleName: "FlowDo",
      },
    },

    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#f6f8fa",
      },
      edgeToEdgeEnabled: true,
      package: "com.flowdo.app",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },

    web: {
      favicon: "./assets/logo.png",
    },

    extra: {
      eas: {
        projectId: "503bec3b-0709-446e-bae4-5250be8e4497",
      },
       WEB_CLIENT_ID: process.env.WEB_CLIENT_ID,
       API_BASE_URL: process.env.API_BASE_URL,
       CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
       CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
       googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
       
    },

    runtimeVersion: {
      policy: "appVersion",
    },

    updates: {
      url: "https://u.expo.dev/503bec3b-0709-446e-bae4-5250be8e4497",
    },

    plugins: [
      "expo-font",
      "@react-native-firebase/app", 
      "@react-native-google-signin/google-signin",
    ],

    scheme: "flowdo",
  },
};
