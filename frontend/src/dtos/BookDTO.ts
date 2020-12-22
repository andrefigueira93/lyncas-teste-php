export interface VolumeInfoDTO {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    imageLinks: {
        thumbnail: string;
    };
    previewLink: string;
    language: string;
}
export default interface BookDTO {
    id: string;
    volumeInfo: VolumeInfoDTO,
}