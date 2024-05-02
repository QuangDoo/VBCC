<template>
  <div style="overflow-x: auto">
    <table :style="{ minWidth: !!scrollX ? `${scrollX}px` : '100%' }">
      <thead class="header">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            :style="{ width: `${column.width}px`, whiteSpace: 'nowrap' }"
          >
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="index">
          <td
            v-for="column in columns"
            :key="column.key"
            :style="{
              textAlign: `${column.fixed || 'center'}`,
              maxWidth: `${column.width}px`,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }"
            :title="column.ellipsis ? item[column.dataIndex] : ''"
          >
            {{ column.render ? column.render(item, index) : item[column.dataIndex] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="DataType">
export interface TableAppProps<DataType> {
  columns: {
    title: string
    dataIndex: string
    key: string
    render?: (item: DataType, index: number) => any
    width?: number | string
    fixed?: 'left' | 'right' | 'center'
    ellipsis?: boolean
  }[]
  dataSource: DataType[]
  scrollX?: number
}

defineProps<TableAppProps<DataType>>()
</script>

<style scoped>
.header {
  background-image: linear-gradient(to right, #11277c, #0000c5);
  color: white;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
}

/* Ensure there's no spacing or borders that might obstruct the radius */
table {
  border-collapse: collapse;
}

thead th:first-child {
  border-top-left-radius: 10px; /* Adjust the radius as needed */
}

thead th:last-child {
  border-top-right-radius: 10px; /* Adjust the radius as needed */
}

thead {
  padding: 8px 0px;
}

thead th {
  padding: 8px;
  text-align: center;
  font-size: 14px;
}

tbody td {
  padding: 10px;
  font-size: 14px;
}

@media (min-width: 768px) {
  thead th {
    font-size: 16px;
  }

  tbody td {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  thead th {
    font-size: 18px;
  }

  tbody td {
    font-size: 18px;
  }
}
</style>
