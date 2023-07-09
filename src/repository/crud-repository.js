class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }

  async destroy(id) {
    try {
      const result = await this.model.findByIdAndDelete({
        _id: id,
      });
      return result;
    } catch (error) {
      console.log("something wrong in delete repository layer");
      throw { error };
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
