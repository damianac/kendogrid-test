<template>
  <div>
     <kendo-grid 
      :data-source="localDataSource"
      :editable="true"
      v-on:detailinit="detailInit" 
      v-on:databound="dataBound"
      :toolbar="['create']">
        <kendo-grid-column 
          :field="'Name'"
          :title="'Name'"
          :width="100">
        </kendo-grid-column>
        <kendo-grid-column 
          :field="'ValidFrom'"
          :title="'ValidFrom'"
          :width="100">
        </kendo-grid-column>
        <kendo-grid-column 
          :command="['destroy']"
          :title="'&nbsp;'"
          :width="100">
        </kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script>
export default {
  name: "KendoGridComponent",
  data() {
    return {
      localDataSource: [{
        "Name": "Test",
        "ValidFrom": "Today",
      },
      {
        "Name": "test2",
        "ValidFrom": "Yestarday",
      }]
    }
  },
  methods: {
    detailInit: function (e) {
      $('<div />').appendTo(e.detailCell).kendoGrid({
        toolbar: [ "create" ],
        columns: [ 
          "Name",
          "ValidFrom",
          "Quantity",
          "Price",
          { command: [ "destroy" ] },
        ],
       
        editable: true,
      });
    },
    dataBound: function (ev) {
      ev.sender.expandRow(ev.sender.tbody.find('tr.k-master-row').first())
    }
  }
}
</script>
