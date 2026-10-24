# Habit Tracker Expo

**Disciplina:** Desenvolvimento Mobile (2026.2.DM) — CESAR School
**Branch:** `feature/aula_06_navigation`

## Sobre o projeto

Rastreador de Micro-hábitos e Condicionamento Físico: o usuário acompanha hábitos diários e registra fotos de progresso.

## Navegação (Aula 6)

Expo Router com **Tabs** (substituiu o Stack). Rotas em `src/app/`:

| Rota | Tela |
| --- | --- |
| `/` | Lista de hábitos |
| `/registrar-foto` | Foto do hábito pela câmera ou galeria, com prévia e botão Concluir |
| `/galeria` | Seleção de até 6 fotos de progresso em grade |
| `/sobre` | Nome do app, versão da aula e limitação |

A tela inicial usa `Link` (para `/registrar-foto` e `/galeria`) e `router.push` (para `/sobre`).

**Limitação declarada:** as fotos ficam só em memória e não são salvas depois que o app é fechado.

## Como rodar

```bash
npm install
npx expo start --clear
```

Abra o app **Expo Go** (SDK 57) no celular e escaneie o QR code. Teste câmera e permissões em aparelho físico. Requisito: **Node.js 22.11+**.
