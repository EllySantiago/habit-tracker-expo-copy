import { Text, StyleSheet } from 'react-native';
import type { CategoriaHabito, StatusHabito } from '../types/habito';
import { textoStatusHabito } from '../utils/status-habito';

// Os tipos de domínio evitam categorias e status fora do conjunto permitido.
type CardHabitoProps = {
    titulo: string;
    categoria: CategoriaHabito;
    status: StatusHabito;
    onPress: () => void;
    destacado?: boolean;
};

export function CardHabito({
    titulo,
    categoria,
    status,
    onPress,
    destacado = false,
}: CardHabitoProps) {
    return (
        <Text
            onPress={onPress}
            style={[styles.card, destacado && styles.destaque]}
        >
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.meta}>
                {categoria} · {textoStatusHabito(status)}
            </Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        elevation: 2,
    },
    destaque: {
        borderColor: '#f26522',
        borderLeftWidth: 4,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    meta: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});
