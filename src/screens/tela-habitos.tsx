import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import { CardHabito } from '../components/Cardhabito';
import type { Habito } from '../types/habito';

// Dados fictícios em memória mantêm a tela utilizável sem depender de persistência.
const habitosIniciais: Habito[] = [
    { id: 'habito-1', titulo: 'Beber água', categoria: 'saude', status: 'pendente' },
    { id: 'habito-2', titulo: 'Fazer alongamento', categoria: 'fitness', status: 'concluido' },
    { id: 'habito-3', titulo: 'Meditar por alguns minutos', categoria: 'mente', status: 'pendente' },
    { id: 'habito-4', titulo: 'Fazer uma caminhada', categoria: 'fitness', status: 'pendente' },
    { id: 'habito-5', titulo: 'Organizar o dia', categoria: 'rotina', status: 'concluido' },
];

export default function TelaHabitos() {
    const router = useRouter();
    const [habitos, setHabitos] = useState(habitosIniciais);
    const concluidos = habitos.filter((habito) => habito.status === 'concluido').length;

    function alternarStatus(id: string) {
        setHabitos((atuais) =>
            atuais.map((habito) =>
                habito.id === id
                    ? {
                          ...habito,
                          status: habito.status === 'pendente' ? 'concluido' : 'pendente',
                      }
                    : habito,
            ),
        );
    }

    return (
        <FlatList
            contentContainerStyle={styles.lista}
            data={habitos}
            keyExtractor={(habito) => habito.id}
            ListHeaderComponent={
                <Cabecalho total={habitos.length} concluidos={concluidos} />
            }
            ListFooterComponent={
                <>
                    {/* Link: navegação declarativa, simples, para um destino fixo. */}
                    <Link href="/registrar-foto" style={styles.link}>Registrar foto</Link>
                    <Link href="/galeria" style={styles.link}>Galeria de progresso</Link>
                    {/* router.push: navegação imperativa, útil quando a ação vem de um evento (botão). */}
                    <Pressable onPress={() => router.push('/sobre')}>
                        <Text style={styles.link}>Sobre o app</Text>
                    </Pressable>
                </>
            }
            renderItem={({ item }) => (
                <CardHabito
                    titulo={item.titulo}
                    categoria={item.categoria}
                    status={item.status}
                    onPress={() => alternarStatus(item.id)}
                    destacado={item.status === 'concluido'}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    lista: {
        flexGrow: 1,
        padding: 16,
    },
    link: { color: '#f26522', fontSize: 16, fontWeight: '700', paddingVertical: 8 },
});
