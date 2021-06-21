<template>
  <div id="app">
    <div class="desc">
      <h3>自定义表格</h3>
      <p>支持表头固定</p>
      <p>支持表格左边及右边固定</p>
      <p>支持多级展开</p>
      <p>支持自定义单元格样式</p>
      <p>支持单元格合并</p>
      <p>支持动态显示隐藏某列</p>
      <p>支持表格内容添加过滤器</p>
      <p>支持单元格宽度</p>
      <p>支持自定义表头单元格对齐方式</p>
      <p>支持自定义表格内容单元格对齐方式</p>
    </div>
    <general-table
      :table-data="tableData"
      :columns="columns"
      :header-top="0"
      :span-method="spanMethod"
    >
      <template v-slot:col2="item">
        <div class="cell" v-if="item.cell">
          <span
            :class="{
              male: item.cell.value === '男',
            }"
            >{{ item.cell.value }}</span
          >
        </div>
      </template>
    </general-table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      columns: [
        {
          label: "日期",
          field: "date",
          align: "left",
          headerAlign: "left",
          width: 100,
          fixed: true,
        },
        {
          label: "姓名",
          field: "name",
          align: "left",
          headerAlign: "left",
          width: 80,
        },
        {
          label: "性别",
          field: "sex",
          filter: "numberFormat",
          width: 66,
        },
        {
          label: "金额",
          field: "amount",
          filter: "numberFormat",
          width: 66,
        },
        {
          label: "数量",
          field: "count",
          filter: "numberFormat",
          width: 66,
        },
        {
          label: "地址",
          headerAlign: "center",
          children: [
            {
              label: "省份",
              field: "province",
              width: 66,
            },
            {
              label: "城市",
              field: "city",
              width: 66,
            },
            {
              label: "地区",
              field: "area",
              width: 66,
            },
            {
              label: "地址",
              field: "address",
              width: 100,
            },
          ],
        },
      ],
      tableData: [],
    };
  },
  created() {},
  mounted() {
    this.tableData = [
      {
        date: "2021-05-06",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "北京市",
        city: "北京市",
        area: "海淀区",
        address: "北京市海淀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-08",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
        isOpend: false,
        children: [
          {
            date: "2021-05-08",
            name: "张三",
            sex: "男",
            amount: 21691800,
            count: 30,
            province: "上海市",
            city: "上海市",
            area: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2021-05-08",
            name: "张三",
            sex: "男",
            amount: 21691800,
            count: 30,
            province: "上海市",
            city: "上海市",
            area: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2021-05-08",
            name: "张三",
            sex: "男",
            amount: 21691800,
            count: 30,
            province: "上海市",
            city: "上海市",
            area: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
          },
        ],
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "北京市",
        city: "北京市",
        area: "海淀区",
        address: "北京市海淀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2021-05-07",
        name: "张三",
        sex: "男",
        amount: 21691800,
        count: 30,
        province: "上海市",
        city: "上海市",
        area: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
      },
    ];
  },
  methods: {
    spanMethod({ row, rowIndex, columnIndex }) {
      if ([5].includes(columnIndex) && rowIndex < 3) {
        // console.log(rowIndex);
        if (
          this.tableData[rowIndex - 1] &&
          row.province === this.tableData[rowIndex - 1].province
        ) {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
        let i = 1;
        while (
          this.tableData[rowIndex + i] &&
          row.province === this.tableData[rowIndex + i].province
        ) {
          i++;
        }
        return {
          rowspan: i,
          colspan: 1,
        };
      }
      return {
        rowspan: 1,
        colspan: 1,
      };
    },
  },
};
</script>

<style>
.desc h3 {
  text-align: center;
  padding: 10px;
}
.desc p {
  font-size: 14px;
  color: #999;
  padding-left: 10px;
}
.male {
  color: rgb(194, 102, 26);
}
</style>
