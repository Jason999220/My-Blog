import { Card, Col, Menu, Row } from "antd";
import React, { useState } from "react";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const easyItems = [
  getItem("1. Two Sum", "sub1", null, [getItem(`......`, "ans1")]),
  getItem("9. Palindrime Number", "sub9", null, [getItem(`......`, "ans9")]),
  getItem("13. Roman to Integer", "sub13", null, [getItem(`......`, "ans13")]),
  getItem("14. Longest Common Prefix", "sub14", null, [
    getItem(`......`, "ans14"),
  ]),
];
const mediumItems = [
  getItem("2. Add Two Number", "sub2", null, [getItem(`......`, "ans2")]),
  getItem("33. Search in Rotated Sorted Array", "sub33", null, [
    getItem(`......`, "ans33"),
  ]),
];

export default function Leetcode() {
  // 存儲 all keys
  const easyKeys = ["sub1", "sub9", "sub13", "sub14"];
  const mediumKeys = ["sub2", "sub33"];

  // 存儲 current open the key
  const [openEasyKeys, setOpenEasyKeys] = useState(["sub1"]);
  const [openMediumKeys, setOpenMediumKeys] = useState(["sub2"]);

  // handle current open the key
  const onOpenChangeEasy = (keys) => {
    const latestOpenKey = keys.find((key) => openEasyKeys.indexOf(key) === -1);
    if (latestOpenKey && easyKeys.indexOf(latestOpenKey) === -1) {
      setOpenEasyKeys(keys);
    } else {
      setOpenEasyKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onOpenChangeMedium = (keys) => {
    const latestOpenKey = keys.find(
      (key) => openMediumKeys.indexOf(key) === -1
    );
    if (latestOpenKey && mediumKeys.indexOf(latestOpenKey) === -1) {
      setOpenMediumKeys(keys);
    } else {
      setOpenMediumKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Easy" bordered={false}>
            <Menu
              mode="inline"
              openKeys={openEasyKeys}
              onOpenChange={onOpenChangeEasy}
              style={{
                width: "80%",
              }}
              items={easyItems}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Medium" bordered={false}>
            <Menu
              mode="inline"
              openKeys={openMediumKeys}
              onOpenChange={onOpenChangeMedium}
              style={{
                width: "80%",
              }}
              items={mediumItems}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Hard" bordered={false}>
            Hard
          </Card>
        </Col>
      </Row>
    </div>
  );
}
