import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pertamina.app',
  appName: 'Pertamina App',
  webDir: 'www',
  // Dont forget to comment if u want build this apk and using ur api
  // server: {
  //   androidScheme: 'http',
  //   url: "http://10.3.118.191:8100"
  // }
};

export default config;