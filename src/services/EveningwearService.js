import GenericService from "./GenericService";
class Eveningwearservice extends GenericService {
  constructor() {
    super();
  }
  addeveningwear = (data) => this.post("eveningwear", data);
  deleteeveningwear = (_id) => this.delete("eveningwear/" + _id);
  updateeveningwear = (_id, data) => this.put("eveningwear/" + _id, data);
  geteveningwear = () => this.get("eveningwear");
  getSingleeveningwear = (id) => this.get("eveningwear/" + id);
}

let eveningwearService = new Eveningwearservice();
export default eveningwearService;