<script setup lang="ts">
import { computed, CSSProperties, getCurrentInstance } from 'vue';
import type { ComputedRef } from 'vue';
import SquirclePath from './SquirclePath';

interface SquircleProps {
  id?: string;
  width: number;
  height: number;
  radius?: number | 'auto';
  roundness?: number;
};

const iOSPreset = {
  r1: 0.0586,
  r2: 0.332,
};

const DEFAULT_RATIO = iOSPreset.r1 / iOSPreset.r2;

const props = defineProps<SquircleProps>();
const uid = `sqi-${getCurrentInstance()?.uid}`;

const maskStyle: ComputedRef<CSSProperties> = computed(() => {
  const { id = uid, width, height } = props;
  const maxBorderRadius = Math.min(width, height) / 2;
  const { radius = maxBorderRadius, roundness = DEFAULT_RATIO } = props;
  const numberRadius = typeof radius === 'string' ? maxBorderRadius : radius;
  const finalBorderRadius = Math.min(numberRadius, maxBorderRadius);
  const data = SquirclePath({
    id,
    width,
    height,
    r1: finalBorderRadius * roundness,
    r2: finalBorderRadius,
  });
  const dataUri = `data:image/svg+xml,${encodeURIComponent(data)}`;
  return {
    maskImage: `url("${dataUri}")`,
    maskPosition: 'center',
    maskRepeat: 'no-repeat',
    width: `${width}px`,
    height: `${height}px`
  };
});
</script>
<template>
  <div :style="maskStyle" style="display: inline-flex">
    <slot name="default" />
  </div>
</template>