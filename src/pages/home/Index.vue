<template>
	<div>
		<nut-button type="warning">
			sssss
		</nut-button>
		<ul>
			<li class="asd">
				45
			</li>
			<li>45</li>
			<li>45</li>
		</ul>
		<div class="aaa" />
		<Test />
	</div>
</template>

<script setup lang="ts">
import Test from '@/components/Test.vue'

// const adddd = 15

console.log('114514')
</script>

<style lang="scss" scoped>
.asd {
	font-size: p2r(32);
	color: green;
}

.aaa {
	width: p2r(200);
	height: p2r(100);
	background-color: pink;
}
.son-style {
	color: red;
}
</style>
