import { View, Text, StyleSheet } from 'react-native';

type CabecalhoProps = {
    total: number;
    concluidos: number;
};

export default function Cabecalho({ total, concluidos }: CabecalhoProps) {
    // A lista controla a rolagem; o cabeçalho não precisa de uma rolagem própria.
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hábitos de hoje</Text>
            <View style={styles.linha}>
                <Text>Total: {total}</Text>
                <Text>Concluídos: {concluidos}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 16 },
    titulo: { color: '#f26522', fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
    linha: { flexDirection: 'row', justifyContent: 'space-between' },
});