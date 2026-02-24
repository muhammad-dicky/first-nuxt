<script setup lang="ts">
const route = useRoute()


definePageMeta({
    validate(route) {
            return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)

    },
})

useSeoMeta({
    title: () => `Villa ${route.params.id} di Bali`,
    description: () => `Detail villa ${route.params.slug} terbaik di Bali`,
})

</script>
