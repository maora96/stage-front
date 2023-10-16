export type Department = {
    id: string;
    name: string;
    description: string;
    cover: string | null;
    createdAt: Date;
    processes: Process[]
}

export type Process = {
    id: string;
    name: string;
    description: string;
    cover: string | null;
    createdAt: Date;
    processes?: Process[]
}