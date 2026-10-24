import { Tabs } from 'expo-router';

// Tabs no lugar do Stack: as telas viram abas fixas. O `name` é o nome do arquivo sem extensão.
// backBehavior="history" faz o router.back() do "Concluir" voltar para a aba anterior.
export default function LayoutRaiz() {
    return (
        <Tabs
            backBehavior="history"
            screenOptions={{
                tabBarActiveTintColor: '#f26522',
                headerTintColor: '#f26522',
                tabBarIcon: () => null, // sem ícones, para não depender de outra biblioteca
            }}
        >
            <Tabs.Screen name="index" options={{ title: 'Meus hábitos', tabBarLabel: 'Hábitos' }} />
            <Tabs.Screen name="registrar-foto" options={{ title: 'Foto do hábito', tabBarLabel: 'Foto' }} />
            <Tabs.Screen name="galeria" options={{ title: 'Galeria' }} />
            <Tabs.Screen name="sobre" options={{ title: 'Sobre o app', tabBarLabel: 'Sobre' }} />
        </Tabs>
    );
}
