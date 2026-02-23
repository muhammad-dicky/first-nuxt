<script>
const isActive = ref(true)
const hasError = ref(false)
const classObject = reactive({
    'active' : true,
    'text-danger' : false,
})
</script>

<template>
    <div>
        <h1>ini adalah page index dari pages/index</h1>
        <AppAlert>ini adalah component dari /components/AppAlert</AppAlert>
        <div
        class="static"
        :class="{'active': isReactive, 'text-danger' : hasError}"
        />

        <div :class="classObject"
        />
        <div class="flex text-center">
            
       <div class=" bg-red-500 text-white p-4 rounded-lg">
  Tailwind Active
</div>
</div>

    </div>
</template>