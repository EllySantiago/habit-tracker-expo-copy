import type { StatusHabito } from '../types/habito';

// A união discriminada garante que cada estado exponha apenas os dados necessários.
export type EstadoTela<T> =
    | { estado: 'carregando' }
    | { estado: 'sucesso'; dados: T }
    | { estado: 'erro'; mensagem: string };

export function textoStatusHabito(status: StatusHabito): string {
    return status === 'concluido' ? 'Concluído' : 'Pendente';
}