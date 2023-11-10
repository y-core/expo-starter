import { Screen, Text } from '~/common/components';
import { lang, tw } from '~/common/utils';

export default function Reset() {
  return (
    <Screen style={tw.style('gap-y-8')}>
      <Text>{lang.auth.resetLabel}</Text>
      <Text>See reset e-mail sent</Text>
    </Screen>
  );
}
