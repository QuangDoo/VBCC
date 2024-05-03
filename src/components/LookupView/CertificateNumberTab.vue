<script setup lang="ts">
import RefreshIcon from '@/assets/icons/RefreshIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import AuthenticationInput from '@/components/AuthenticationInput.vue'
import ViewBox from '@/components/BoxView.vue'
import ButtonApp from '@/components/Button/ButtonApp.vue'
import CheckboxApp from '@/components/CheckboxApp.vue'
import DateTimePicker from '@/components/DateTimePicker.vue'
import InputApp from '@/components/InputApp.vue'
import ResultSearchText from '@/components/ResultSearchText.vue'
import TableApp, { type TableAppProps } from '@/components/TableApp.vue'

import { ref } from 'vue'

const year = ref()

type DataKey =
  | 'ten'
  | 'ngaySinh'
  | 'noiSinh'
  | 'gioiTinh'
  | 'danToc'
  | 'xepLoai'
  | 'soHieuVanBang'
  | 'soVaoSoGoc'

type DataType = Record<DataKey, string>

const columns: TableAppProps<DataType>['columns'] = [
  { title: 'STT', key: 'stt', dataIndex: 'stt', width: 10, render: (_, index) => index + 1 },
  { title: 'Họ và tên người học', key: 'ten', dataIndex: 'ten', fixed: 'left' },
  { title: 'Ngày tháng năm sinh', key: 'ngaySinh', dataIndex: 'ngaySinh' },
  {
    title: 'Nơi sinh',
    key: 'noiSinh',
    dataIndex: 'noiSinh'
  },
  {
    title: 'Giới tính',
    key: 'gioiTinh',
    dataIndex: 'gioiTinh'
  },
  {
    title: 'Dân tộc',
    key: 'danToc',
    dataIndex: 'danToc'
  },
  {
    title: 'Xếp loại',
    key: 'xepLoai',
    dataIndex: 'xepLoai'
  },
  {
    title: 'Số hiệu VBCC',
    key: 'soHieuVanBang',
    dataIndex: 'soHieuVanBang'
  },
  {
    title: 'Số vào sổ gốc',
    key: 'soVaoSoGoc',
    dataIndex: 'soVaoSoGoc'
  }
]

const data: DataType[] = [
  {
    ten: 'Tướng Thị Văn Mêns',
    ngaySinh: '10/10/2000',
    noiSinh: 'Bến Tre',
    gioiTinh: 'Nữ',
    danToc: 'Kinh',
    xepLoai: 'XH',
    soHieuVanBang: '123',
    soVaoSoGoc: '123'
  },
  {
    ten: 'Tướng Thị Văn Mêns',
    ngaySinh: '10/10/2000',
    noiSinh: 'Bến Tre',
    gioiTinh: 'Nữ',
    danToc: 'Kinh',
    xepLoai: 'XH',
    soHieuVanBang: '123',
    soVaoSoGoc: '123'
  },
  {
    ten: 'Tướng Thị Văn Mêns',
    ngaySinh: '10/10/2000',
    noiSinh: 'Bến Tre',
    gioiTinh: 'Nữ',
    danToc: 'Kinh',
    xepLoai: 'XH',
    soHieuVanBang: 'S000934',
    soVaoSoGoc: '2015/05/05964'
  },
  {
    ten: 'Tướng Thị Văn Mêns',
    ngaySinh: '10/10/2000',
    noiSinh: 'Bến Tre',
    gioiTinh: 'Nữ',
    danToc: 'Kinh',
    xepLoai: 'XH',
    soHieuVanBang: 'S000934',
    soVaoSoGoc: '2015/05/05964'
  },
  {
    ten: 'Tướng Thị Văn Mêns',
    ngaySinh: '10/10/2000',
    noiSinh: 'Bến Tre',
    gioiTinh: 'Nữ',
    danToc: 'Kinh',
    xepLoai: 'XH',
    soHieuVanBang: 'S000934',
    soVaoSoGoc: '2015/05/05964'
  },
  {
    ten: 'Tướng Thị Văn Mêns',
    ngaySinh: '10/10/2000',
    noiSinh: 'Bến Tre',
    gioiTinh: 'Nữ',
    danToc: 'Kinh',
    xepLoai: 'XH',
    soHieuVanBang: 'S000934',
    soVaoSoGoc: '2015/05/05964'
  },
  {
    ten: 'Tướng Thị Văn Mêns',
    ngaySinh: '10/10/2000',
    noiSinh: 'Bến Tre',
    gioiTinh: 'Nữ',
    danToc: 'Kinh',
    xepLoai: 'XH',
    soHieuVanBang: 'S000934',
    soVaoSoGoc: '2015/05/05964'
  }
]

function handleClearYear() {
  year.value = ''
}
</script>

<template>
  <div class="certificate-number-tab">
    <ViewBox>
      <form class="form">
        <DateTimePicker
          label="Năm tốt nghiệp"
          required
          v-model="year"
          year-picker
          @clear="handleClearYear"
          placeholder="Chọn năm tốt nghiệp"
          picker="year"
        />

        <InputApp
          label="Số hiệu văn bằng/chứng chỉ"
          placeholder="Nhập số hiệu văn bằng"
          :required="true"
        />

        <AuthenticationInput :maxLength="6" />

        <div class="checkbox">
          <CheckboxApp label="Tìm không dấu" checked />

          <CheckboxApp label="Tìm chính xác" checked />
        </div>

        <div></div>

        <div class="actions">
          <ButtonApp
            type="default"
            label="Làm mới"
            class="button-action"
            style="padding: 8px 16px 8px 16px"
          >
            <template #icon>
              <RefreshIcon />
            </template>
          </ButtonApp>

          <ButtonApp
            type="primary"
            class="button-action"
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

    <TableApp :columns="columns" :dataSource="data" style="margin-top: 12px" :scrollX="992" />
  </div>
</template>

<style scoped>
.certificate-number-tab {
  padding: 0px 6px;
}
.form {
  display: grid;
  grid-template-columns: auto;
  gap: 12px;
}
.checkbox {
  display: flex;
  gap: 0px;
  justify-content: space-between;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.button-action {
  width: 100%;
}

@media (min-width: 768px) {
  .form {
    display: grid;
    grid-template-columns: auto auto;
    gap: 12px;
  }
  .checkbox {
    display: flex;
    gap: 30px;
  }
  .actions {
    display: flex;
    align-items: end;
    justify-content: end;
    gap: 8px;
  }
  .button-action {
    width: unset;
  }
}

@media (min-width: 1024px) {
  .form {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 25px;
  }
  .checkbox {
    display: flex !important;
    gap: 30px !important;
    justify-content: start;
  }
  .actions {
    display: flex;
    align-items: end;
    justify-content: end;
    gap: 8px;
  }
  .button-action {
    width: unset;
  }
}
</style>
