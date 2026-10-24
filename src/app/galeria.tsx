import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { MiniaturaFoto } from '../components/miniatura-foto';

// Fora do componente, para a função não ser recriada a cada render.
const renderMiniatura = ({ item }: { item: ImagePicker.ImagePickerAsset }) => <MiniaturaFoto foto={item} />;

function ListaVazia() {
    return <Text style={estilos.vazio}>Nenhuma foto de progresso ainda.</Text>;
}

export default function TelaGaleria() {
    const [fotos, setFotos] = useState<ImagePicker.ImagePickerAsset[]>([]);

    async function escolherVarias() {
        // Seleção múltipla e recorte não convivem: o editor de recorte trabalha com uma imagem por vez,
        // então allowsEditing é ignorado quando allowsMultipleSelection está ativo.
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsMultipleSelection: true,
            selectionLimit: 6,
            quality: 0.7,
        });
        if (resultado.canceled) return;
        setFotos(resultado.assets);
    }

    return (
        <View style={estilos.tela}>
            <Pressable onPress={escolherVarias} style={estilos.botao}>
                <Text style={estilos.textoBotao}>Escolher até 6 fotos</Text>
            </Pressable>
            <FlatList
                data={fotos}
                keyExtractor={(foto) => foto.uri}
                renderItem={renderMiniatura}
                numColumns={3}
                columnWrapperStyle={estilos.linha}
                contentContainerStyle={estilos.grade}
                ListEmptyComponent={ListaVazia}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    tela: { flex: 1, padding: 24, gap: 16 },
    botao: { backgroundColor: '#f26522', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
    textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
    grade: { gap: 8 },
    linha: { gap: 8 },
    vazio: { fontSize: 15, color: '#666' },
});
