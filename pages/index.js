import { Card, Button, Input } from "antd";

import StudentTable from "../componet/StudentTable";
import AddModal from "../componet/addmodal";
import StudentStore from '../store/Studnetstore'

const { Search } = Input;

const Home = () => {
  const { setIsModal, data, setData, datasearch, setsearch } = StudentStore()
  const handleSearch = (e) => {
    if (e.target.value != "") {
      setData(data.filter((el) => el.name.includes(e.target.value)))

    } else {
      setData(datasearch)
    }
  }
  return (
    <div style={{ padding: "10%" }}>
      <Card
        hoverable
        title={
          <div className="flex">
            <Button onClick={() => setIsModal(true)}>Add New</Button>
            <Input
              onChange={handleSearch}
              placeholder="input search text"

              style={{ width: 300 }}
            />
          </div>
        }
      >
        <StudentTable />
      </Card>
      <AddModal />
    </div>
  );
};

export default Home;