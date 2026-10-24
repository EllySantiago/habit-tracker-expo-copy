import { Image } from 'expo-image';
import type { ImagePickerAsset } from 'expo-image-picker';
import { StyleSheet } from 'react-native';

export function MiniaturaFoto({ foto }: { foto: ImagePickerAsset }) {
    // recyclingKey evita que a FlatList reaproveite a imagem errada ao reciclar células.
    return <Image source={{ uri: foto.uri }} recyclingKey={foto.uri} style={estilos.miniatura} contentFit="cover" />;
}

const estilos = StyleSheet.create({
    // maxWidth impede que a última foto de uma linha incompleta estique até ocupar a linha toda.
    miniatura: { flex: 1, aspectRatio: 1, borderRadius: 8, maxWidth: '33%' },
});
