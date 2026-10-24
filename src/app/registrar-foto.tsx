// CONTRATO DA TELA (o que pedir, o que ler, quando parar):
// GALERIA → PEDIR: launchImageLibraryAsync (sem permissão prévia)  LER: resultado.assets[0].uri  PARAR: se resultado.canceled
// CÂMERA  → PEDIR: requestCameraPermissionsAsync e depois launchCameraAsync  LER: resultado.assets[0].uri  PARAR: se !granted ou resultado.canceled
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Falha = 'camera-negada' | 'camera-bloqueada';

// Duas mensagens diferentes: na "negada" o app ainda pode perguntar de novo; na "bloqueada" só pelas Configurações.
const MENSAGENS: Record<Falha, string> = {
    'camera-negada':
        'Sem permissão da câmera. Toque em "Tirar foto" para tentar de novo ou escolha uma foto da galeria.',
    'camera-bloqueada':
        'A câmera está bloqueada. Abra Configurações > Apps > este app > Permissões e ative a câmera. Enquanto isso, você pode usar a galeria.',
};

// Opções declaradas uma vez e usadas na câmera e na galeria.
const OPCOES: ImagePicker.ImagePickerOptions = {
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [4, 3], // No iPhone o recorte pode vir quadrado: o editor nativo do iOS ignora o aspect.
    quality: 0.7,
};

export default function TelaRegistrarFoto() {
    const router = useRouter();
    const [fotoUri, setFotoUri] = useState<string | null>(null);
    const [falha, setFalha] = useState<Falha | null>(null);

    async function tirarFoto() {
        setFalha(null);
        const permissao = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissao.granted) {
            setFalha(permissao.canAskAgain ? 'camera-negada' : 'camera-bloqueada');
            return;
        }
        const resultado = await ImagePicker.launchCameraAsync(OPCOES);
        if (resultado.canceled) return; // cancelar não é erro
        setFotoUri(resultado.assets[0].uri);
    }

    async function escolherDaGaleria() {
        setFalha(null);
        // A galeria do sistema usa o seletor nativo, que não exige permissão de leitura.
        const resultado = await ImagePicker.launchImageLibraryAsync(OPCOES);
        if (resultado.canceled) return;
        setFotoUri(resultado.assets[0].uri);
    }

    function concluir() {
        if (router.canGoBack()) router.back();
        else router.replace('/');
    }

    return (
        <View style={estilos.tela}>
            {fotoUri ? (
                <Image source={{ uri: fotoUri }} style={estilos.previa} contentFit="cover" transition={300} />
            ) : (
                <View style={[estilos.previa, estilos.semFoto]}>
                    <Text>Nenhuma foto ainda</Text>
                </View>
            )}

            <Pressable onPress={tirarFoto} style={estilos.botao}>
                <Text style={estilos.textoBotao}>Tirar foto</Text>
            </Pressable>

            <Pressable onPress={escolherDaGaleria} style={estilos.botaoSecundario}>
                <Text style={estilos.textoBotaoSecundario}>Escolher da galeria</Text>
            </Pressable>

            {falha && <Text style={estilos.erro}>{MENSAGENS[falha]}</Text>}

            <Pressable
                onPress={concluir}
                disabled={!fotoUri}
                style={[estilos.botao, !fotoUri && estilos.desligado]}
            >
                <Text style={estilos.textoBotao}>Concluir</Text>
            </Pressable>
        </View>
    );
}

const estilos = StyleSheet.create({
    tela: { flex: 1, padding: 24, gap: 16 },
    previa: { width: '100%', aspectRatio: 4 / 3, borderRadius: 12 },
    semFoto: { backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center' },
    botao: { backgroundColor: '#f26522', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
    desligado: { opacity: 0.4 },
    textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
    botaoSecundario: { borderWidth: 2, borderColor: '#f26522', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
    textoBotaoSecundario: { color: '#f26522', fontWeight: '700', fontSize: 16 },
    erro: { fontSize: 15, color: '#b00020' },
});
