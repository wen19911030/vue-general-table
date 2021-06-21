// 导入组件，组件必须声明 name
import generalTable from "./src/general-table.vue";

// 为组件提供 install 安装方法，供按需引入
generalTable.install = function(Vue) {
  Vue.component(generalTable.name, generalTable);
};

// 默认导出组件
export default generalTable;
