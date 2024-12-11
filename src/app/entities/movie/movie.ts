export class Movie {
    id!: number;
    name!: string;
    genre!: string;
    duration!: string;
    releaseDate!: Date;
    director!: string;
    language!: string;
    rated!: string;
    detail!: string;
    status!: number;
    avatar!: Blob;  // Không cần thay đổi ở đây
    trailer!: string;
}
