<template>
  <div>
    <table width="100%">
      <thead class="header">
        <tr>
          <th v-for="column in columns" :key="column.key">
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="index">
          <td v-for="column in columns" :key="column.key">
            {{ item[column.dataIndex] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="DataType">
import type { JSX } from 'vue/jsx-runtime'

export interface TableAppProps<DataType> {
  columns: {
    title: string
    dataIndex: string
    key: string
    render?: (item: DataType) => JSX.Element
  }[]
  dataSource: DataType[]
}

defineProps<TableAppProps<DataType>>()
</script>

<style scoped>
.header {
  background-image: linear-gradient(to right, #11277c, #0000c5);
  color: white;
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
}

tbody td {
  padding: 10px;
}
</style>
