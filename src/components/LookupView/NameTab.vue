<template>
  <div class="name-tab">
    <ViewBox>
      <form class="form">
        <DateTimePicker label="Năm tốt nghiệp" required v-model="year" picker="year" />
        <SelectApp label="Trường" required :options="options" />

        <InputApp label="Họ và tên" required placeholder="Nhập họ và tên" />

        <DateTimePicker label="Ngày sinh" placeholder="Chọn ngày sinh" required v-model="date" />

        <AuthenticationInput />

        <div></div>

        <div class="checkbox">
          <CheckboxApp label="Tìm không dấu" checked />

          <CheckboxApp label="Tìm chính xác" checked />
        </div>

        <div class="hide"></div>

        <div class="actions">
          <ButtonApp
            type="default"
            class="button"
            label="Tìm kiếm"
            style="padding: 8px 16px 8px 16px"
          >
            <template #icon>
              <RefreshIcon />
            </template>
          </ButtonApp>

          <ButtonApp
            type="primary"
            class="button"
            label="Tra cứu"
            style="padding: 8px 16px 8px 16px"
          >
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

<script setup lang="ts">
import RefreshIcon from '@/assets/icons/RefreshIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import ViewBox from '@/components/BoxView.vue'
import ButtonApp from '@/components/Button/ButtonApp.vue'
import CheckboxApp from '@/components/CheckboxApp.vue'
import DateTimePicker from '@/components/DateTimePicker.vue'
import InputApp from '@/components/InputApp.vue'
import ResultSearchText from '@/components/ResultSearchText.vue'
import SelectApp from '@/components/SelectApp.vue'
import type { TableAppProps } from '@/components/TableApp.vue'
import TableApp from '@/components/TableApp.vue'
import { ref } from 'vue'
import AuthenticationInput from '../AuthenticationInput.vue'

const year = ref(new Date().getFullYear())
const date = ref(new Date())

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

const options = [{ value: '1', label: 'Trường tại giáo dưỡng dành cho Nhung' }]
</script>

<style scoped>
.name-tab {
  padding: 0px 6px;
}
.form {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 8px;
}
.checkbox {
  display: flex;
  gap: 40px;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.button {
  width: 100%;
}

.hide {
  visibility: hidden;
  display: none;
}

@media (min-width: 768px) {
  .form {
    grid-template-columns: auto auto;
  }
  .button {
    width: unset;
  }
  .actions {
    justify-content: flex-end;
    gap: 8px;
  }
}

@media (min-width: 1024px) {
  .form {
    grid-template-columns: auto auto auto;
  }
  .button {
    width: unset;
  }

  .actions {
    justify-content: flex-end;
    gap: 8px;
  }
  .hide {
    visibility: visible;
    display: block;
  }
}
</style>
