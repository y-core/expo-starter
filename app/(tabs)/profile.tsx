import { Button, Screen, Text } from '~/common/components';
import { lang } from '~/common/utils';
import { useAuth } from '~/features/auth';

export default function Profile() {
  const { loading, auth, signOut } = useAuth();

  return (
    <Screen>
      <Text>{lang.text.profileTitle}</Text>
      <Text>{auth?.email}</Text>
      <Button loading={loading} onPress={signOut}>
        {lang.auth.logoutLabel}
      </Button>
    </Screen>
  );
}
