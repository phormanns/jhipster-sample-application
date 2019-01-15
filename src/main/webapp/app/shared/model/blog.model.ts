import { IPost } from 'app/shared/model//post.model';

export interface IBlog {
    id?: number;
    title?: string;
    description?: string;
    posts?: IPost[];
}

export class Blog implements IBlog {
    constructor(public id?: number, public title?: string, public description?: string, public posts?: IPost[]) {}
}
