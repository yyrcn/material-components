import Component from 'vue-class-component';

import docDefaultCollapsible from './defaultCollapsible';
import docPopoutCollapsible from './popoutCollapsible';
import docExpendableCollapsible from './expendableCollapsible';

@Component({
    components: {
        docDefaultCollapsible,
        docPopoutCollapsible,
        docExpendableCollapsible
    },
    template: require('./collapsibles.html')
})
export default class Collapsibles {
    data() {
        return {
            api: [
                {
                    name: "Collapsible",
                    api: require('../../components/collapsible/collapsible-api.json')
                },
                {
                    name: "Collapsible item",
                    api: require('../../components/collapsible-item/collapsible-item-api.json')
                }
            ],
            snippets: {
                defaultCollapsible: require('./defaultCollapsible/defaultCollapsible.snippet.html'),
                popoutCollapsible: require('./popoutCollapsible/poppoutCollapsible.snippet.html'),
                expendableCollapsible: require('./expendableCollapsible/expendableCollapsible.snippet.html')
            },
            src: [
                {
                    name: 'Collapsible',
                    script: require('!!html!highlightjs?lang=ts!../../components/collapsible/index.ts'),
                    template: require('!!html!highlightjs?lang=html!../../components/collapsible/collapsible.html')
                },
                {
                    name: 'Collapsible item',
                    script: require('!!html!highlightjs?lang=ts!../../components/collapsible-item/index.ts'),
                    template: require('!!html!highlightjs?lang=html!../../components/collapsible-item/collapsible-item.html')
                }
            ]
        }
    }
}