import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipstersamplePostModule } from './post/post.module';
import { JhipstersampleTagModule } from './tag/tag.module';
import { JhipstersampleBlogModule } from './blog/blog.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipstersamplePostModule,
        JhipstersampleTagModule,
        JhipstersampleBlogModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipstersampleEntityModule {}
