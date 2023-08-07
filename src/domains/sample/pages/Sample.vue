<template>
	<h2>Sample Page</h2>
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator';
import SampleMixin from '@/domains/sample/mixins/SampleMixin';

@Component({
	components:{
		Sample,
	}
})

export default class Sample extends Mixins ( SampleMixin ) {

}
</script>