import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
    return (
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>habit-tracker-expo</Text>
            <Text style={estilos.texto}>Versão da aula 6 (navegação)</Text>
            <Text style={estilos.texto}>
                Limitação: as fotos escolhidas ficam só na memória e não são salvas depois que o app é fechado.
            </Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    tela: { flex: 1, padding: 24, gap: 12 },
    titulo: { fontSize: 22, fontWeight: '700', color: '#f26522' },
    texto: { fontSize: 16, color: '#333' },
});
