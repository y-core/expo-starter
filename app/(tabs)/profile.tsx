import { useAuth } from '~/auth/hooks';
import { Button, Screen, Text } from '~/common/components';
import { lang } from '~/common/utils';

export default function Profile() {
  const { loading, auth, signOut } = useAuth();

  return (
    <Screen>
      <Text>{lang.text.profileTitle}</Text>
      <Text>{auth?.name}</Text>
      <Button loading={loading} onPress={signOut}>
        {lang.auth.logoutLabel}
      </Button>
    </Screen>
  );
}
