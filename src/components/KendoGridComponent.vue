<template>
  <div>
     <kendo-grid :data-source="localDataSource">
    </kendo-grid>
  </div>
</template>

<script>
export default {
  name: "KendoGridComponent",
  data() {
    return {
      localDataSource: [{
        "Name": 1,
        "ValidFrom": "Chai",
        "Quantity": 18,
        "Price": 39,
      },
      {
        "Name": 1,
        "ValidFrom": "Chai",
        "Quantity": {
          "Name": 123,
        },
        "Price": 39,
      }]
    }
  }
}
</script>
