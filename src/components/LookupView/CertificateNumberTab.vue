<script setup lang="ts">
import RefreshIcon from '@/assets/icons/RefreshIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import AuthenticationInput from '@/components/AuthenticationInput.vue'
import ButtonApp from '@/components/Button/ButtonApp.vue'
import CheckboxApp from '@/components/CheckboxApp.vue'
import DateTimePicker from '@/components/DateTimePicker.vue'
import InputApp from '@/components/InputApp.vue'
import ResultSearchText from '@/components/ResultSearchText.vue'
import TableApp, { type TableAppProps } from '@/components/TableApp.vue'
import ViewBox from '@/components/ViewBox.vue'

import { ref } from 'vue'

const year = ref(new Date().getFullYear())

interface DataType {
  name: string
  age: number
  address: string
  danhXung: string
}

const columns: TableAppProps<DataType>['columns'] = [
  { title: 'Tên', key: 'name', dataIndex: 'name' },
  { title: 'Tuổi', key: 'age', dataIndex: 'age' },
  { title: 'Địa chỉ', key: 'address', dataIndex: 'address' },
  {
    title: 'Danh xưng',
    key: 'danhXung',
    dataIndex: 'danhXung'
  }
]

const data: DataType[] = [
  { name: 'Mến', address: 'Sạp số 6', age: 100, danhXung: 'Mến gà' },
  { name: 'Mến', address: 'Sạp số 6', age: 100, danhXung: 'Mến gà' },
  { name: 'Mến', address: 'Sạp số 6', age: 100, danhXung: 'Mến gà' },
  { name: 'Mến', address: 'Sạp số 6', age: 100, danhXung: 'Mến gà' },
  { name: 'Mến', address: 'Sạp số 6', age: 100, danhXung: 'Mến gà' },
  { name: 'Mến', address: 'Sạp số 6', age: 100, danhXung: 'Mến gà' }
]
</script>

<template>
  <div class="certificate-number-tab">
    <ViewBox>
      <form class="form">
        <DateTimePicker label="Năm tốt nghiệp" required v-model="year" year-picker />
        <InputApp
          label="Số hiệu văn bằng/chứng chỉ"
          placeholder="Nhập số hiệu văn bằng"
          :required="true"
        />

        <AuthenticationInput />

        <div class="checkbox">
          <CheckboxApp label="Tìm không dấu" checked />

          <CheckboxApp label="Tìm chính xác" checked />
        </div>

        <div></div>

        <div class="actions">
          <ButtonApp type="default" label="Tìm kiếm" style="padding: 8px 16px 8px 16px">
            <template #icon>
              <RefreshIcon />
            </template>
          </ButtonApp>

          <ButtonApp type="primary" label="Tra cứu" style="padding: 8px 16px 8px 16px">
            <template #icon>
              <SearchIcon />
            </template>
          </ButtonApp>
        </div>
      </form>
    </ViewBox>

    <ResultSearchText :length="0" style="margin-top: 20px" />

    <TableApp :columns="columns" :dataSource="data" style="margin-top: 12px" />
  </div>
</template>

<style scoped>
.certificate-number-tab {
  padding: 0px 6px;
}
.form {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
}
.checkbox {
  display: flex;
  gap: 40px;
}
.actions {
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 8px;
}
</style>
