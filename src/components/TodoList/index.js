import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { remainerListSelector } from "../../redux/selectors";
import { addToDo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [name, setName] = useState("");
  const [prioriry, setPrioriry] = useState("");
  const dispatch = useDispatch();
  const remainerList = useSelector(remainerListSelector);

  console.log(remainerList);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePriority = (value) => {
    setPrioriry(value);
  };

  const handleAddToDo = () => {
    dispatch(addToDo({ id: uuidv4(), name, prioriry, completed: false }));
    setName("");
    setPrioriry("");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {remainerList.map((toDo) => (
          <Todo
            key={toDo.id}
            id={toDo.id}
            name={toDo.name}
            prioriry={toDo.prioriry}
            completed={toDo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={name} onChange={handleChangeName} />
          <Select
            defaultValue="Medium"
            value={prioriry}
            onChange={handleChangePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddToDo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
