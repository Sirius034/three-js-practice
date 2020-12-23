import { Site } from './site';
import { Form } from './form';
import { Three } from '../modules/three';
import { modelForm } from '../model/model';

export class App {
    init() {
        const three = new Three();
        const site = new Site();

        site.render(three, '.interface__representatin');
        site.render(
            new Form(modelForm, three.setData),
            '.form'
        );
    }
}