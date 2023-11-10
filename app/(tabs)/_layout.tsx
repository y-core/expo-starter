import React from 'react';
import { Link, Tabs } from 'expo-router';

import { useColor } from '~/color/hooks';
import { PressableIcon, TabBarIcon } from '~/common/components';
import { lang, tw } from '~/common/utils';

export default function TabsLayout() {
  const { colors } = useColor();

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: tw.color(colors.background) },
        tabBarActiveBackgroundColor: tw.color(colors.background),
        tabBarActiveTintColor: tw.color(colors.itemSelected),
        tabBarInactiveTintColor: tw.color(colors.itemDefault),
        tabBarStyle: { backgroundColor: tw.color(colors.background), borderTopColor: tw.color(colors.background) },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTintColor: tw.color(colors.text),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          title: lang.text.homeTitle,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerTintColor: tw.color(colors.text),
          tabBarIcon: ({ color }) => <TabBarIcon name="heart-sharp" color={color} />,
          title: lang.text.favoritesTitle,
        }}
      />
      <Tabs.Screen
        name="enter"
        options={{
          headerTintColor: tw.color(colors.text),
          tabBarIcon: ({ color }) => <TabBarIcon name="add-circle-sharp" size={56} color={color} style={tw.style('-mt-7')} />,
          title: lang.text.enterTitle,
        }}
      />
      <Tabs.Screen
        name="entries"
        options={{
          headerTintColor: tw.color(colors.text),
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-sharp" color={color} />,
          title: lang.text.entriesTitle,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTintColor: tw.color(colors.text),
          headerRight: () => (
            <Link href="/settings" asChild>
              <PressableIcon name="settings" color={tw.color(colors.itemDefault)} style={tw.style('mr-6 bg-transparent')} />
            </Link>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
          title: lang.text.profileTitle,
        }}
      />
    </Tabs>
  );
}
