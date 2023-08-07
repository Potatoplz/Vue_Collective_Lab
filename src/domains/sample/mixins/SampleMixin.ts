import { Component, Mixins } from 'vue-property-decorator';
import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

@Component({
	name: 'SampleMixin',
})

export default class SampleMixin extends Mixins( ){

}

