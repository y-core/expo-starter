import { Screen, Text } from '~/common/components';
import { lang } from '~/common/utils';

export default function Enter() {
  return (
    <Screen>
      <Text>{lang.text.WelcomeTag}</Text>
    </Screen>
  );
}
