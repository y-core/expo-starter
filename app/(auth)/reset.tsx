import { Screen, Text } from '~/common/components';
import { lang } from '~/common/utils';

export default function Reset() {
  return (
    <Screen>
      <Text>{lang.auth.resetLabel}</Text>
      <Text>See reset e-mail sent</Text>
    </Screen>
  );
}
