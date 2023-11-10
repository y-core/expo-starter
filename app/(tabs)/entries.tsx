import { Screen, Text } from '~/common/components';
import { lang } from '~/common/utils';

export default function Home() {
  return (
    <Screen>
      <Text>{lang.text.WelcomeLabel}</Text>
    </Screen>
  );
}
