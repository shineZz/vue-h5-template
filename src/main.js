import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { isweixin } from './unit';
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';
import './registerServiceWorker'
import './plugins/element.js'
import './assets/styles/base.scss'
import 'element-ui/lib/theme-chalk/index.css';
import { mapMutations } from 'vuex'
Vue.config.productionTip = false
var elUseList = [
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
];
elUseList.forEach((u) => {
  Vue.use(u);
})
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

router.beforeEach((to, from, next) => {
  let url = encodeURIComponent(location.href)
  let took = to.query.state||false
  console.log(took, 'took0')
  let bool = isweixin()
  if (bool) {
    if (!took) {
      location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9f8d74816fc35815&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=true#wechat_redirect`
    }else{
      console.log(took, 'took122')
      console.log(to, from,next, url,'urlurl')
      let query =to.query
      if ('code' in query){
        sessionStorage['webappCode'] = query.code
        next()
      }else{
        this.$message({
          message: '请授权之后访问',
          type: 'warning'
        });
        location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9f8d74816fc35815&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=true#wechat_redirect`
      }
      
      
    }
  } else {
    if (!took) {
      next()
      // location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9f8d74816fc35815&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=false#wechat_redirect`
    }
  }
  
  /* must call `next` */


})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
