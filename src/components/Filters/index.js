import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCompletedSelector,
  filterPriorirySelector,
  filterSearchSelector,
} from "../../redux/selectors";
import filtersSlice from "./filtersSlice";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();

  const { searchFilter, prioririesFilter, completedStatusFilter } =
    filtersSlice.actions;

  const search = useSelector(filterSearchSelector);
  const prioriry = useSelector(filterPriorirySelector);
  const completed = useSelector(filterCompletedSelector);

  const handleChangeFilterSearch = (e) => {
    dispatch(searchFilter(e.target.value));
  };

  const handleChangeFilterPrioriry = (value) => {
    dispatch(prioririesFilter(value));
  };

  const handleChangeFilterCompleted = (e) => {
    dispatch(completedStatusFilter(e.target.value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={search}
          onChange={handleChangeFilterSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={completed} onChange={handleChangeFilterCompleted}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={prioriry}
          onChange={handleChangeFilterPrioriry}
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
      </Col>
    </Row>
  );
}
