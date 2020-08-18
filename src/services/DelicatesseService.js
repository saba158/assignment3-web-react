import GenericService from "./GenericService";
class Delicatesseservice extends GenericService {
  constructor() {
    super();
  }
  adddelicatesse = (data) => this.post("delicatesse", data);
  deletedelicatesse = (_id) => this.delete("delicatesse/"+ _id);
  updatedelicatesse = (_id, data) => this.put("delicatesse/" + _id, data);
  getdelicatesse = () => this.get("delicatesse");
  getSingledelicatesse = (id) => this.get("delicatesse/" + id);
}

let delicatesseService = new Delicatesseservice();
export default delicatesseService;