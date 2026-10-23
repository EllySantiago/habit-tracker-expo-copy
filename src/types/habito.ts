export type CategoriaHabito = 'saude' | 'fitness' | 'mente' | 'rotina';

export type StatusHabito = 'pendente' | 'concluido';

export type Habito = {
    id: string;
    titulo: string;
    categoria: CategoriaHabito;
    status: StatusHabito;
    fotoUri?: string;
};

// O identificador é gerado pelo app, então não faz parte dos dados de criação.
export type NovoHabito = Omit<Habito, 'id'>;