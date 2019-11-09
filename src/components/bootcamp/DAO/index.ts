import BootcampModel from "components/bootcamp/model/index";
import BaseDAO from "common/BaseDAO";

class BootcampDAO extends BaseDAO {
  constructor() {
    super(BootcampModel);
  }
}

export default BootcampDAO;
