import { Redirect } from 'expo-router';

export default function Index() {
  // Always redirect to mobile chat view
  return <Redirect href="/chat" />;
}