import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { isweixin, urlParse } from './unit';
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
  Notification, Image
} from 'element-ui';
// import './registerServiceWorker'
import './plugins/element.js'
import './assets/styles/base.scss'
import 'element-ui/lib/theme-chalk/index.css';
import { appID } from "./unit";
import { mapMutations } from 'vuex'
import md5 from 'js-md5';

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
  Image
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
Vue.prototype.$md5 = md5;

router.beforeEach((to, from, next) => {
  let url = location.href
  // let url = encodeURIComponent(location.href.replace('#/', ''))
  let query = urlParse(url) || {}
  // if(!query){Message.error('该链接无效')}
  let took = query.state || false
  let bool = isweixin()

  if (bool) {
    for (let key in query) {
      sessionStorage[key] = query[key]
    }
    // if ('sid' in query) { sessionStorage['sid'] = query.sid }
    if (!took) {
      location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
        appID.appid
        }&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_userinfo&state=true#wechat_redirect`
    } else {
      if ('code' in query) {
        sessionStorage['webappCode'] = query.code
        next()
      } else {
        next()
      }
    }
  } else {
    next()
    // location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
    //     appID.appid
    //     }&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_userinfo&state=false#wechat_redirect`

  }

  /* must call `next` */


})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
