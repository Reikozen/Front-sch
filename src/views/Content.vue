<template>
    <div class="p-5">
        {{ artikel_id }}
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
      artikel_id: Number
    },
    data(){
        return { 
        };
    }
}
</script>
