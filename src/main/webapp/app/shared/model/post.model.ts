import { IBlog } from 'app/shared/model//blog.model';
import { ITag } from 'app/shared/model//tag.model';

export interface IPost {
    id?: number;
    title?: string;
    shortText?: string;
    fullText?: string;
    blog?: IBlog;
    tags?: ITag[];
}

export class Post implements IPost {
    constructor(
        public id?: number,
        public title?: string,
        public shortText?: string,
        public fullText?: string,
        public blog?: IBlog,
        public tags?: ITag[]
    ) {}
}
