import * as React from 'react';
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from 'react-nativescript-navigation';
import { Conversations } from './Conversations';
import { Conversation } from './Conversation';

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="conversations"
            screenOptions={{
                headerShown: false,
            }}
        >
            <StackNavigator.Screen name="conversations" component={Conversations} />
            <StackNavigator.Screen name="conversation" component={Conversation} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
