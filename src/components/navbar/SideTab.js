import Tabs, { TabPane } from "rc-tabs";
import "../../../node_modules/rc-tabs/assets/index.css";
import { AddClassForm } from "../../components/add_class_form/AddClassForm";

export const SideTab = () => {
  function callback(e) {
    console.log(e);
  }

  return (
    <div>
      <Tabs
        defaultActiveKey="2"
        onChange={callback}
        tabPosition="left"
        style={{ height: "100vh", width: "100%" }}
      >
        <TabPane tab="2019/202- Term 1" key="1">
          <AddClassForm />
        </TabPane>
        <TabPane tab="2019/202- Term 2" key="2">
          <AddClassForm />{" "}
        </TabPane>
        <TabPane tab="2019/202- Term 3" key="3">
          <AddClassForm />
        </TabPane>
      </Tabs>
    </div>
  );
};
