import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../features/auth/screens/Splash";
import Welcome from "../../features/auth/screens/Welcome";
import Login from "../../features/auth/screens/Login";
import Passo1 from "../../features/auth/screens/Cadastro/Passo1";
import Passo2 from "../../features/auth/screens/Cadastro/Passo2";
import Passo3 from "../../features/auth/screens/Cadastro/Passo3";
import Passo4 from '../../features/auth/screens/Cadastro/Passo4';
import Passo5 from '../../features/auth/screens/Cadastro/Passo5';
import Home from "../../features/user/screens/Home";
import Telefones from "../../features/user/screens/Telefones";
import EnderecoUsuaria from '../../features/user/screens/EnderecoUsuaria';
import Mapa from "../../features/map/screens/Mapa";
import Mural from "../../features/news/screens/Mural";
import Perfil from "../../features/user/screens/Perfil";
import EditarPerfil from "../../features/user/screens/EditarPerfil";
import AlterarSenha from '../../features/user/screens/AlterarSenha';
import Notificacoes from "../../features/user/screens/Notificacoes";
import Central from "../../features/user/screens/Central";
import HelpChat from "../../features/support/screens/HelpChat";
import TermosPrivacidade from '../../features/user/screens/TermosPrivacidade';
import MeusGuardioes from "../../features/guardians/screens/MeusGuardioes";
import AddGuardiao from "../../features/guardians/screens/MeusGuardioes/AddGuardiao";
import CadastroGuardiao1 from "../../features/auth/screens/CadastroGuardiao/CadastroGuardiao1";
import CadastroGuardiao2 from "../../features/auth/screens/CadastroGuardiao/CadastroGuardiao2";
import CadastroGuardiao3 from "../../features/auth/screens/CadastroGuardiao/CadastroGuardiao3";
import HomeGuardiao from "../../features/guardian/screens/HomeGuardiao";
import AcompanharRota from '../../features/guardian/screens/HomeGuardiao/AcompanharRota';
import CentralEmergencia from "../../features/emergency/screens/CentralEmergencia";
import ChatGuardiao from '../../features/messages/screens/ChatGuardiao';
import Mensagens from '../../features/messages/screens/Mensagens';
import PerfilGuardiao from '../../features/guardian/screens/PerfilGuardiao';
import NotificacoesGuardiao from '../../features/guardian/screens/NotificacoesGuardiao';
import CentralAjuda from '../../features/support/screens/CentralAjuda';
import CentralGuardiao from '../../features/guardian/screens/CentralGuardiao';
import EditarPerfilGuardiao from '../../features/guardian/screens/EditarPerfilGuardiao';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Welcome" component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Passo1" component={Passo1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Passo2" component={Passo2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Passo3" component={Passo3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Passo4" component={Passo4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Passo5" component={Passo5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Telefones" component={Telefones}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="EnderecoUsuaria" component={EnderecoUsuaria}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Mapa" component={Mapa}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="MeusGuardioes" component={MeusGuardioes}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="AddGuardiao" component={AddGuardiao}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Mural" component={Mural}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Perfil" component={Perfil}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Notificacoes" component={Notificacoes}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="AlterarSenha" component={AlterarSenha}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Central" component={Central}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="HelpChat" component={HelpChat}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="TermosPrivacidade" component={TermosPrivacidade}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="CadastroGuardiao3" component={CadastroGuardiao3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="CadastroGuardiao2" component={CadastroGuardiao2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="CadastroGuardiao1" component={CadastroGuardiao1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="HomeGuardiao" component={HomeGuardiao}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="PerfilGuardiao" component={PerfilGuardiao}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="CentralAjuda" component={CentralAjuda}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="CentralGuardiao" component={CentralGuardiao}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="NotificacoesGuardiao" component={NotificacoesGuardiao}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="CentralEmergencia" component={CentralEmergencia}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="EditarPerfilGuardiao" component={EditarPerfilGuardiao}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="ChatGuardiao" component={ChatGuardiao}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="AcompanharRota" component={AcompanharRota}
          options={{
          headerShown: false
          }}
          />
        <Stack.Screen name="Mensagens" component={Mensagens}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
