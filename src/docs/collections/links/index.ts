import Component from 'vue-class-component';

import components from '../../../components';

@Component({
    components,
    template: require('./links.html')
})
export default class LinksCollection {
    data() {
        return {
            active: 2
        }
    }
}

