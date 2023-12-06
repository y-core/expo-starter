import { Switch } from 'react-native';
import { Stack } from 'expo-router';

import { useColor } from '~/color/hooks';
import { Icon, Row, Screen, Text, View } from '~/common/components';
import { lang, tw } from '~/common/utils';

export default function () {
  const { colors, theme, toggleTheme } = useColor();

  return (
    <>
      <Stack.Screen
        options={{
          title: lang.text.settingsTitle,
          headerStyle: { backgroundColor: tw.color(colors.background) },
        }}
      />
      <Screen style={styles.mainContainer}>
        <Row style={styles.row}>
          <View style={styles.themeContainer}>
            {theme === 'light' ? (
              <Icon color={tw.color(colors.tertiary)} size={32} name="sunny" />
            ) : (
              <Icon color={tw.color(colors.tertiary)} size={32} name="moon" />
            )}
            <Text>{lang.text.themeLabel}</Text>
          </View>
          <Switch
            trackColor={{
              false: tw.color(colors.button),
              true: tw.color(colors.button),
            }}
            thumbColor={tw.color(colors.buttonText)}
            onValueChange={toggleTheme}
            value={theme === 'light'}
          />
        </Row>
      </Screen>
    </>
  );
}

const styles = {
  mainContainer: tw.style('justify-start'),
  row: tw.style('justify-between px-4'),
  themeContainer: tw.style('flex-row items-center justify-between gap-4'),
};
